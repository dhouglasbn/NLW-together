import styled from "styled-components";

export const PageAuth = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    
    aside {
        flex: 7;

        background: ${props => props.theme.colors.primary};
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        div.switch-theme {
            margin-left: 20px;
        }        

        div#aside-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
    
            padding: 120px 80px;

            img {
                max-width: 320px;
            }
    
            strong {
                font: 700 36px "Poppins", sans-serif;
                line-height: 42px;
                margin-top: 16px;
            }
    
            p {
                font-size: 24px;;
                line-height: 32px;
                margin-top: 16px;
                color: #fff;
            }
        }
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.background};
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;
        /* essa seta é para a estilização ir apenas na imagem da classe main-content */
        > img {
            align-self: center;
        }

        h2 {
            color: ${props => props.theme.colors.text};
            font-size: 24px;
            margin: 64px 0 24px;
            font-family: "Poppins", sans-serif;
        }

        form {
            input {
                height: 50px;
                border-radius: 8px;
                padding: 0 16px;
                background: ${props => props.theme.colors.background};
                border: 1px solid ${props => props.theme.colors.separator};
                color: ${props =>  props.theme.colors.text}
            }

            button {
                margin-top: 16px;
            }

            button, input {
                width: 100%;
            }
        }

        p {
            font-size: 14px;
            color: ${props => props.theme.colors.pushHomeText};
            margin-top: 16px;

            a {
                color: ${props => props.theme.colors.secundary};
            }
        }

        .create-room {
            margin-top: 64px;
            height: 58px;
            border-radius: 8px;
            font-weight: 500;
            background: ${props => props.theme.colors.googleButton};
            color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            border: 0;

            transition: filter 0.2s;

            img {
                margin-right: 8px;
            }

            &:hover {
                filter: brightness(0.9);
            }
        }

        .separator {
            font-size: 14px;
            color: ${props => props.theme.colors.separator};

            margin: 32px 0;
            display: flex;
            align-items: center;

            &::before {
                content: "";
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.separator};
                margin-right: 16px;
            }

            &::after {
                content: "";
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.separator};
                margin-left: 16px;
            }
        }
    }
`
