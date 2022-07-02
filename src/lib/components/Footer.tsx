import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

export const Footer = () => {
    const T = useTranslations()
    const year = new Date().getFullYear()

    return (
        <FooterContainer>
            <CompanyName>
                Copy project from &copy; {year} {T.companyName}
            </CompanyName>
            <LinkContainer>
                <Link href={APP_CONFIG.ICON_URL} target='_blank'>
                    {T.components.footer.Icon}
                </Link>
                <Link href={APP_CONFIG.LIBRE_TRANSLATE_URL} target='_blank'>
                    {T.components.footer.LibreTranslate}
                </Link>
            </LinkContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.foreground};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CompanyName = styled.div`
    color: ${({ theme }) => theme.colors.typography};
    padding-left: 10px;
`

const LinkContainer = styled.div`
    display: flex;
    column-gap: 20px;
    padding-right: 10px;
`
const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
`
