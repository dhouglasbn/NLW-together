// importar o módulo antes para não sobrescrever-lo totalmente
import "styled-components";

// para compilar esse arquivo junto com a aplicação tem que adicionar em tsconfig
// "files": [ "diretório" ]

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;
            tertiary: string;

            separator: string;
            pushHomeText: string;
            googleButton: string;

            questionBackground: string;
            highlightBackground: string;
            answeredBackground: string;
            authorName: string;

            background: string;
            text: string;
        };
    };

};