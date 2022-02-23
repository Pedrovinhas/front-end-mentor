import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            head: string;
            violet: string;
           
            cardBg: string;
            mainBg: string;

            mainParagraph: string;
        }
    }
}