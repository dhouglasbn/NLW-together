import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { database } from "../services/firebase";

import "../styles/auth.scss";

import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
    const [newRoom, setNewRoom] = useState("")

    const { user } = useAuth()

    async function handleCreateRoom(event: FormEvent) {
        // cancelar o recarregamento de pagina padrão do form react
        event.preventDefault();

        // se newRoom está sem espaços à direita ou à esquerda
        if(newRoom.trim() === "") {
            return;
        }

        const roomRef = database.ref("rooms");

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom} >
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom} />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>

        </div>
    )
}