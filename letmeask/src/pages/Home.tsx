import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

// toda função que começa como use é um hook, e todo hook precisa estar dentro de um componente
export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle } = useContext(AuthContext);

    async function handleCreateRoom() {
        // se user não estiver autenticado, logar com google
        if(!user) {
            await signInWithGoogle();
        }

        history.push("/rooms/new")
    }


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form >
                        <input 
                        type="text"
                        placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}