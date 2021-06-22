import { createContext, useState } from "react";
import { BrowserRouter ,Route } from "react-router-dom";


import { auth, firebase } from "./services/firebase";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

// toda state ela tem o tipo futuro e o atual
// signIn ta definido como uma função que retorna void

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
}

type User = {
  id: string;
  name: string;
  avatar: string
}

export const AuthContext = createContext({} as AuthContextType) // contextos precisam de um valor seja qual momento ele estiver

function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle() {
    // pegando o provedor
    const provider = new firebase.auth.GoogleAuthProvider();

    // fazendo o login em popup com o provedor utilizado
    // result vai me retornar os dados o usuário do provedor
    auth.signInWithPopup(provider).then(result => {

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
    })

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{user, signInWithGoogle}}> 
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;