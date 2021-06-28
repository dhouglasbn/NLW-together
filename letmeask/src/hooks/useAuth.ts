import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts"

// os valores de authcontext são id, avatar, name e a função signInWithGoogle

// pegando os valores de user logado e retornando eles
export function useAuth() {
    // coletando os valores de user em authContexts
    const value = useContext(AuthContext);

    // retornando-os
    return value;
}