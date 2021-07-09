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

            background: string;
            text: string;
        };
    };

};