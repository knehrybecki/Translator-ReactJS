import { Confidence, Loader, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import { ExchangeLanguage } from 'lib/components/ExchangeLanguage'
import { Language, LanguageCode } from 'lib/models'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SelectedLanguages } from './types'

type TranslaotrScreenProps = {
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslaotrScreenProps> = ({ languages }) => {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.English,
    })

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
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
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
                    <TextInput />
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
`
const InputFooter = styled.div`
    display: flex;
    justify-content: space-between;
`
