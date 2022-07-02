import { Images } from 'assets'
import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

export const Header = () => {
    const T = useTranslations()

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={Images.Logo} />
                <Title>{T.components.header.title}</Title>
            </LogoContainer>
            <LinkContainer>
                <Link href={APP_CONFIG.GITHUB_URL} target='_blank'>
                    {T.components.header.github}
                </Link>
                <Link href={APP_CONFIG.DISCORD_URL} target='_blank'>
                    {T.components.header.discord}
                </Link>
            </LinkContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.foreground};
    display: flex;
    justify-content: space-between;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`
const Logo = styled.img`
    height: 45px;
    width: 45px;
    margin-left: 10px;
`
const Title = styled.h1`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.typography};
`
const LinkContainer = styled.div`
    display: flex;
    column-gap: 15px;
    margin-right: 20px;
    align-items: center;
`
const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
`
