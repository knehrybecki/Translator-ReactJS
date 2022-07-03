export type Dictionary = {
    common: {
        autoTranslate: string
    }
    companyName: string
    components: {
        header: {
            title: string
            github: string
            discord: String
        }
        footer: {
            Icon: string
            LibreTranslate: string
        }
        message: {
            tryAgain: string
        }
    }
    screen: {
        translator: {
            loading: string
            error: string
            empty: string
        }
    }
}
