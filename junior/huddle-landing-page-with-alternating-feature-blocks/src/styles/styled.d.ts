import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        bgColor: string;

        colors: {
            header: string,
            body: string,
            footer: string
        }

        mobile: string;

      
    }
}