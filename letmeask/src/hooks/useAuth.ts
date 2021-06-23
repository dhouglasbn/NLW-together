import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts"

// pegando os valores de user logado e retornando eles
export function useAuth() {
    // coletando os valores de user em authContexts
    const value = useContext(AuthContext);

    // retornando-os
    return value;
}