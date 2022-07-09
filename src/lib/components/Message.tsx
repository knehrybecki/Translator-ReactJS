import { useTranslations } from 'lib/hooks'
import React from 'react'
import styled from 'styled-components'

type MessageProps = {
    message: string,
    withButton?: boolean,
    onClick?(): void
}

export const Message: React.FunctionComponent<MessageProps> = ({
    message,
    withButton,
    onClick,
}) => {
    const T = useTranslations()

    return (
        <MessageContainer>
            <Text>{message}</Text>
            {withButton && <Button onClick={onClick}>{T.components.message.tryAgain}</Button>}
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    color: ${({ theme }) => theme.colors.typography};
`
const Button = styled.div`
    padding: 10px 5px;
    text-align: center;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
`
const Text = styled.div`
    color: ${({ theme }) => theme.colors.typography};
`
