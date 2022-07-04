import React, { useEffect } from 'react'
import styled from 'styled-components'

type TextInputProps = {
    disabled?: boolean
    autoFocus?: boolean
    placeholder?: string
    value?: string
    onChangeText?(text: string): void
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({
    autoFocus,
    disabled,
    placeholder,
    value,
    onChangeText,
}) => {
    const inputRef = React.createRef<HTMLTextAreaElement>()

    useEffect(() => {
        if (!disabled && autoFocus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <Input
            value={value}
            disabled={disabled}
            ref={inputRef}
            placeholder={disabled ? undefined : placeholder}
            onChange={event => {
                if (onChangeText) {
                    onChangeText(event.target.value)
                }
            }}
        />
    )
}

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
