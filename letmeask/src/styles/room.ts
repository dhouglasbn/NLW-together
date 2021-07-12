import styled from "styled-components";

export const PageRoom = styled.div`
    header {
        padding: 24px;
        border-bottom: 1px solid ${props => props.theme.colors.roomHeaderBorder};

        .content {
            max-width: 1128px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > div img {
                max-height: 45px;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 16px;

                button {
                    height: 40px;
                    
                }
            }
        }
    }

    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: "Poppins", sans-serif;
                font-size: 24px;
                color: ${props => props.theme.colors.text};
            }

            span {
                margin-left: 16px;
                background: ${props => props.theme.colors.secundary};
                border-radius: 9999px;
                padding: 8px 16px;
                color: ${props => props.theme.colors.background};
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: ${props => props.theme.colors.questionBackground};
                box-shadow: 0 2px 12px rgba(0,0,0, 0.84);
                resize: vertical;
                min-height: 130px;
                outline: ${props => props.theme.colors.primary};
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 8px;;
                        color: ${props => props.theme.colors.text};
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
                
                span {
                    font-size: 14px;
                    color: ${props => props.theme.colors.authorName};
                    font-weight: 500;

                    button {
                        background: transparent;
                        border : 0;
                        color: ${props => props.theme.colors.primary};
                        text-decoration: underline;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            display: flex;
            margin-top: 32px;
            align-items: center;
            flex-direction: column;

            h2 {
                font-family: Poppins, sans-serif;
                font-weight: 600;
                font-size: 18pt;
            }

            p {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 14pt;
                color: ${props => props.theme.colors.authorName};
            }

            .question {
                width: 100%;
            }
        }
    }
`