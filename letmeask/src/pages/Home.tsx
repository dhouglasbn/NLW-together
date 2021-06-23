import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

// toda função que começa como use é um hook, e todo hook precisa estar dentro de um componente
export function Home() {
    const[roomCode, setRoomCode] = useState("")

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        // se user não estiver autenticado, logar com google
        if(!user) {
            await signInWithGoogle();
        }

        history.push("/rooms/new")
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        // faz nada se o campo estiver vazio
        if (roomCode.trim() === "") {
            return;
        }

        // pegando tudo de dentro de rooms, na parte do codigo do campo
        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        // se a sala não existe, o user é alertado
        if(!roomRef.exists()) {
            alert("Room does not exists!");
            return;
        }

        // se existir, ele é redirecionado para sala
        history.push(`/rooms/${roomCode}`)
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
                    <form onSubmit={handleJoinRoom} >
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode} />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}