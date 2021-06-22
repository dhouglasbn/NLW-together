import { useHistory } from "react-router-dom";

import { auth, firebase } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";


// toda função que começa como use é um hook, e todo hook precisa estar dentro de um componente
export function Home() {

    const history = useHistory();

    function handleCreateRoom() {
        // pegando o provedor
        const provider = new firebase.auth.GoogleAuthProvider();

        // fazendo o login em popup com o provedor utilizado
        // result vai me retornar os dados o usuário do provedor
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })
 
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