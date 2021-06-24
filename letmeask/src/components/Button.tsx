import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

// recebe a tipagem buttonHTML e a tipagem isOutlined opcional

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

// usando o rest operator

export function Button({ isOutlined = false , ...props }: ButtonProps) {
    return (
        <button className={`button ${ isOutlined ? "outlined" : ""}`} {...props} />
    )
} 