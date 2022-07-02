import styled from 'styled-components'

export const TextInput = () => <Input placeholder='text...' />

const Input = styled.textarea`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border: none;
    border-radius: 8px;
    height: 300px;
    width: 500px;
    resize: none;
    padding: 10px;
`
