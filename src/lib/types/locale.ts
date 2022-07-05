export type Dictionary = {
    common: {
        autoTranslate: string
        companyName: string
    }
    components: {
        app: {
            loading: string
            error: string
            empty: string
        }
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
        },
        confidence: {
            error: string
        }
    }
    screens: {
        translator: {
            sourceInputPlaceHolder: string
        }
    }
}
