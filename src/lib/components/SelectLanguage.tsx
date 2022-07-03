import { Language, LanguageCode } from 'lib/models'
import React, { useMemo } from 'react'
import styled from 'styled-components'

type SelectLanguageProps = {
    languages: Array<Language>
    SelectedLangugage: LanguageCode
    exclude: Array<LanguageCode>
    onChange(newLanguage: LanguageCode): void
}

export const SelectLanguage: React.FunctionComponent<SelectLanguageProps> = ({
    languages,
    SelectedLangugage,
    exclude,
    onChange,
}) => {
    const filteredLanguages = useMemo(
        () =>
            languages
                .filter(languages => !exclude.includes(languages.code))
                .map(languages => ({
                    key: languages.code,
                    label: languages.name,
                })),
        [languages, exclude]
    )

    return (
        <Select
            value={SelectedLangugage}
            onChange={event => onChange(event.target.value as LanguageCode)}>
            {filteredLanguages.map(language => (
                <Option key={language.key} value={language.key}>
                    {language.label}
                </Option>
            ))}
        </Select>
    )
}

const Select = styled.select`
    max-width: 140px;
    margin-bottom: 10px;
    /* appearance: none; */
    border: 0;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.typography};
    height: 25px;
    padding: 0 10px;
`
const Option = styled.option``
