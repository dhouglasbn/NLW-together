import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts"

export function useAuth() {
    // coletando os valores de user em authContexts
    const value = useContext(AuthContext);

    return value;
}