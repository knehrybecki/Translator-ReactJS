import { Confidence, Loader, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import { ExchangeLanguage } from 'lib/components/ExchangeLanguage'
import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import { AutoDetectedLanguage, Language, LanguageCode } from 'lib/models'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAutoDetectLanguage } from './actions'
import { SelectedLanguages } from './types'
import { useDebounce, useDebouncedCallback } from 'use-debounce'

type TranslaotrScreenProps = {
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslaotrScreenProps> = ({ languages }) => {
    const T = useTranslations()
    const [query, SetQuery] = useState<string>('')
    const [autoDetectedlanguage, setAutoDetectedLAnguage] = useState<AutoDetectedLanguage>()
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.English,
    })
    const {
        isLoading: isDetectingLanguage,
        hasError: hasErrorDetectingLanguage,
        fetch: autoDetectLanguage,
    } = useAutoDetectLanguage(setAutoDetectedLAnguage)
    const debounceAutoDetectLanguage = useDebouncedCallback(
        debouncedQuery => {
            if (debouncedQuery.length < 5 ) {
                return
            }
            if (selectedLanguages.source ===  LanguageCode.Auto) {
                autoDetectLanguage(debouncedQuery)
            }
        },
        1000
    )

    return (
        <Container>
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage
                        languages={languages}
                        exclude={[selectedLanguages.target]}
                        SelectedLangugage={selectedLanguages.source}
                        onChange={newCode =>
                            setSelectedLanguages(prevState => ({
                                ...prevState,
                                source: newCode,
                            }))
                        }
                    />
                    <TextInput
                        autoFocus
                        value={query}
                        onChangeText={newQuery => {
                            if (newQuery.length > APP_CONFIG.TEXT_INPUT_LIMIT) {
                                return
                            }

                            SetQuery(newQuery)

                            if (selectedLanguages.source === LanguageCode.Auto) {
                                debounceAutoDetectLanguage(newQuery)
                            }
                        }}
                        placeholder={T.screens.translator.sourceInputPlaceHolder}
                    />
                    <LoaderContainer>
                        {!isDetectingLanguage &&
                            <Loader />
                            }
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence
                            hasError={hasErrorDetectingLanguage && selectedLanguages.source === LanguageCode.Auto}
                            autoDetectedLanguage={autoDetectedlanguage!}
                            onClick={() =>{
                                setSelectedLanguages(prevState => ({
                                    ...prevState,
                                    source: autoDetectedlanguage?.language as LanguageCode,
                                }))
                                setAutoDetectedLAnguage(undefined)
                            }}
                        />
                        <TextCounter counter={query.length} limit={APP_CONFIG.TEXT_INPUT_LIMIT} />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage
                    hidden={selectedLanguages.source === LanguageCode.Auto}
                    onClick={() =>
                        setSelectedLanguages(prevState => ({
                            source: prevState.target,
                            target: prevState.source,
                        }))
                    }
                />
                <InputContainer>
                    <SelectLanguage
                        languages={languages}
                        exclude={[selectedLanguages.source, LanguageCode.Auto]}
                        onChange={newCode =>
                            setSelectedLanguages(prevState => ({
                                ...prevState,
                                target: newCode,
                            }))
                        }
                        SelectedLangugage={selectedLanguages.target}
                    />
                    <TextInput disabled />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                </InputContainer>
            </TranslatorContainer>
        </Container>
    )
}

const Container = styled.div`
    color: ${({ theme }) => theme.colors.typography};
    display: flex;
    flex-direction: column;
    flex: 1;
`
const TranslatorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const LoaderContainer = styled.div`
    padding: 0 10px;
    margin-bottom: 8px;
    height: 2px;
`
const InputFooter = styled.div`
    display: flex;
    justify-content: space-between;
`
