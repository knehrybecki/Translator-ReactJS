import { Confidence, Loader, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import { ExchangeLanguage } from 'lib/components/ExchangeLanguage'
import { useTranslations } from 'lib/hooks'
import React from 'react'
import styled from 'styled-components'

export const TranslatorScreen: React.FunctionComponent = () => {
    const T = useTranslations()

    return (
        <Container>
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage />
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage />
                <InputContainer>
                    <SelectLanguage />
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
