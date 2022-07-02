import styled from 'styled-components'

export const SelectLanguage = () => (
    <Select>
        <Option>Polish</Option>
        <Option>English</Option>
    </Select>
)

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
