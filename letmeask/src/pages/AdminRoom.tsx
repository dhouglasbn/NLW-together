import { useHistory, useParams } from "react-router-dom";

import Switch from "react-switch";
import { shade } from "polished";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useRoom } from "../hooks/useRoom";

import { PageRoom } from "../styles/room";

import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "styled-components";


type RoomParams = {
    id: string;
}

export function AdminRoom() {

    const { colors, themeTitle } = useContext(ThemeContext)

    // pegando a id da sala que ta na params da página
    const params = useParams<RoomParams>();
    // atribuindo essa id a roomId
    const roomId = params.id;
    const history = useHistory()

    const { toggleTheme } = useAuth();

    // pegando o título e as questões com a hook useRoom passando a id dessa sala
    const { title, questions } = useRoom(roomId);

    async function handleEndRoom() {
        // encerrando a sala
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        // mandando o user para a home
        history.push("/");
    }

    async function handleDeleteQuestion(questionId: string) {
        // pedindo confirmação do usuário, isso retorna true ou false
        if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
            // deletando questão
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    // marcar questão como respondida
    async function handleCheckQuestionAsAnswered(questionId: string) {
        // setando isAnswered como true
        // dps o css vai alterar o estilo da questão
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })
    }

    // destacando a questão
    async function handleHighlightQuestion(questionId: string) {
        // setando isHighlighted como true
        // dps o css vai alterar o estilo da questão
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true
        })
    }

    return (
        <PageRoom>
            <header>
                <div className="content">
                    <div>
                        <img src={logoImg} alt="Letmeask" />
                        <Switch
                        className="switch-theme"
                        onChange={toggleTheme}
                        checked={themeTitle === "dark"}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}
                        onColor={shade(0.15, colors.primary)}
                        offColor={colors.secundary}
                        />
                    </div>
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {/* os && é pra fazer um ternário sem um else */}
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                    {/* mapeando a state questions */}
                    {questions.length < 1 ? 
                    <>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.1" cx="75" cy="75" r="75" fill="#835AFD"/>
                    <path d="M9 29.7229V62.7836V65.145C9 67.7534 11.1145 69.868 13.7229 69.868H44.4221L57.0363 81.5118C57.883 82.2934 59.2331 81.5235 58.9917 80.3968L56.2295 67.5065H64.4946C67.103 67.5065 69.2175 65.392 69.2175 62.7836V29.7229C69.2175 27.1145 67.103 25 64.4946 25H13.7229C11.1145 25 9 27.1145 9 29.7229Z" fill="#835AFD"/>
                    <path d="M149.218 57.7229V90.7836V93.145C149.218 95.7534 147.103 97.868 144.495 97.868H113.795L101.181 109.512C100.335 110.293 98.9844 109.524 99.2259 108.397L101.988 95.5065H93.7229C91.1145 95.5065 89 93.392 89 90.7836V57.7229C89 55.1145 91.1145 53 93.7229 53H144.495C147.103 53 149.218 55.1145 149.218 57.7229Z" fill="#E559F9"/>
                    <path d="M42 101.41V118.281V119.486C42 120.817 43.0886 121.896 44.4314 121.896H60.2353L66.7291 127.838C67.1649 128.237 67.86 127.844 67.7357 127.269L66.3137 120.691H70.5686C71.9114 120.691 73 119.612 73 118.281V101.41C73 100.079 71.9114 99 70.5686 99H44.4314C43.0886 99 42 100.079 42 101.41Z" fill="#D67EE2"/>
                    <circle cx="25.5" cy="46.5" r="3.5" fill="#FEFEFE"/>
                    <circle cx="38.5" cy="46.5" r="3.5" fill="#FEFEFE"/>
                    <circle cx="51.5" cy="46.5" r="3.5" fill="#FEFEFE"/>
                    </svg>
                    <h2>Nenhuma pergunta por aqui...</h2>
                    <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
                    </> : 
                    questions.map(question => {
                        // retornando para cada item um componente passando a content e a author
                        return (
                            <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            isAnswered={question.isAnswered}
                            isHighlighted={question.isHighlighted}
                            >
                                {/* usando aqui uma fragment, pro react serve como uma parent, mas não vai para o html */}
                                {!question.isAnswered && (
                                    <>
                                        {/* marcar questão como respondida */}
                                        <button 
                                            className="answer-button"
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                            <img src={answerImg} alt="Marcar pergunta como respondida" />
                                        </button>
                                        {/* marcar questão como highlighted */}
                                        <button 
                                            className="highlight-button"
                                            type="button"
                                            onClick={() => handleHighlightQuestion(question.id)}
                                        >
                                            <img src={checkImg} alt="Dar destaque à pergunta" />
                                        </button>
                                    </>
                                )}  

                                {/* deletar questão */}
                                <button 
                                className="delete-button"
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </div>
            </main>
        </PageRoom>
    )
}