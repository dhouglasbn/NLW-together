import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { database } from "../services/firebase";

import "../styles/auth.ts";

import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
    // título da sala
    const [newRoom, setNewRoom] = useState("")

    const history = useHistory()

    // atribuindo a user as info de id, name e avatar
    const { user } = useAuth()

    async function handleCreateRoom(event: FormEvent) {
        // cancelar o recarregamento de pagina padrão do form react
        event.preventDefault();

        // se não há nada em new room, não faz nada
        if(newRoom.trim() === "") {
            return;
        }

        // em rooms
        const roomRef = database.ref("rooms");

        // adicionando em rooms a room com seu titulo e a id do admin
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        // levando o user para dentro da página da sala
        history.push(`/admin/rooms/${firebaseRoom.key}`)
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