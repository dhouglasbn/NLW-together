import { useState, useEffect } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

// essa hook vai servir basicamente para pegar as questões da sala

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<string, {
        authorId: string;
    }>
}>


type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId: string | undefined;
}


export function useRoom(roomId: string) {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        // a referencia da sala que é chamada a hook
        const roomRef = database.ref(`rooms/${roomId}`);


        // fazendo um on, sou eu quem to dando o nome value para essa listener, room vai ser a snapshot do banco retornada aqui
        // para pegar os dados dessa snapshot, só usar parameter.val()
        roomRef.on("value", room => {
            // pegando o valor da dataSnapShot
            const databaseRoom = room.val();
            // atribuindo a fbq as questions de dbr  ou passasndo um objeto vazio caso não haja questões
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            // Object.entries gera um array com arrays de keys e values em sequencia
            // ([key, value]) é a desestruturação de uma array
            // organizando os dados em parsedQuestions: id, content, author, isHighlighted, isAnswered, likeCOunt, likeId
            // organizando os dados por ordem decrescente de like
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
                }
            }).sort((a, b) => {
                if(a.likeCount > b.likeCount) {
                    return -1;
                }
                if (a.likeCount < b.likeCount) {
                    return 1;
                }
                return 0;
            })

            // setando titulo e questões
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions);

            // desligando os listeners de value
            return () => {
                roomRef.off("value")
            }
        })
    }, [roomId, user?.id])

    // daqui vai sair título e questões
    return { questions, title }
}