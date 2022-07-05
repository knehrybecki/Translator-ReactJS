import { Dictionary } from 'lib/types'

export const en_GB: Dictionary = {
    common: {
        autoTranslate: 'Auto translate',
        companyName: 'Codemask Academy',
    },

    components: {
        app: {
            loading: 'Fetching supported languages...',
            error: 'Something went wrong',
            empty: 'No supported language',
        },
        header: {
            github: 'Github',
            discord: 'Discord',
            title: 'Translator ReactJS',
        },
        footer: {
            Icon: 'Icon',
            LibreTranslate: 'LibreTranslator',
        },
        message: {
            tryAgain: 'Try again',
        },
        confidence: {
            error: 'We could\'t detect the language'
        }
    },
    screens: {
        translator: {
            sourceInputPlaceHolder: 'text...',
        },
    },
}
