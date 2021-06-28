import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

// recebe a tipagem buttonHTML e a tipagem isOutlined opcional

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

// usando o rest operator para pegar qualquer prop que o componente button necessita
// parametro outlined para botão branco de borda roxa, ou botão roxo sem borda

export function Button({ isOutlined = false , ...props }: ButtonProps) {
    return (
        <button className={`button ${ isOutlined ? "outlined" : ""}`} {...props} />
    )
} 