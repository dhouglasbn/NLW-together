import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { auth, firebase } from "../services/firebase"


import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

// toda state ela tem o tipo futuro e o atual
// signIn ta definido como uma função que retornara uma Promise por ser async, e essa Promise é uma void

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    toggleTheme: () => void;
}
  
type User = {
    id: string;
    name: string;
    avatar: string
}

type AuthContextProviderProps = {
    children: ReactNode;
}

// dando um createContext para começar o contexto com valor vazio e passando tipagem
export const AuthContext = createContext({} as AuthContextType) 

export function AuthContextProvider (props: AuthContextProviderProps) {

  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light)
  }



  const [user, setUser] = useState<User>()

  // toda vez que se cria um event listener é recomendado que se atribua uma váriavel
  // para no final retornar uma função que desativa todas as event listeners

  useEffect(() => {
    // se ele conseguir verificar que o user já estava logado anteriormente, retorna um valor pra user
    // se o user já estiver logado, ele busca as informações e seta em user
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;

          // se não houver displayName ou foto, retorna erro
          if(!displayName || !photoURL ) {
            throw new Error("Missing information from Google Account.")
          }

          // se houver, seta em user uma id, name e avatar com as info
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
      }
    })

    // desativando todas as event listeners
    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    // o app necessita da autenticação google ativada no projeto firebase
    // pegando o provedor
    const provider = new firebase.auth.GoogleAuthProvider();

    // fazendo o login em popup com o provedor utilizado
    
    const result = await auth.signInWithPopup(provider);

      // se for retornado uma resposta com user
        if (result.user) {
          // pegar de user info de displayName, url da foto e uid
          const { displayName, photoURL, uid } = result.user;

          // se não houver displayName ou foto, retorna erro
          if(!displayName || !photoURL ) {
            throw new Error("Missing information from Google Account.")
          }

          // se houver, seta em user uma id, name e avatar com as info
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
    

  }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle, toggleTheme}}>
            <ThemeProvider theme={theme}>
              {props.children}
            </ThemeProvider>
        </AuthContext.Provider>
    )
}