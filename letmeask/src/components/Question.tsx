import { memo, ReactNode } from "react";

import "../styles/question.ts";
import classNames from "classnames";
import { QuestionStyle } from "../styles/question";

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

function QuestionComponent( {
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children
} : QuestionProps) {
    return (
        <QuestionStyle 
        // fica highlighted se ainda não for respondida ou estiver highlighted
        // fica answered se for respondida
        className={classNames(
            "question",
            { answered : isAnswered },
            { highlighted: isHighlighted && !isAnswered }
        )}
        >
            <p>{content}</p>
            <footer>
            <div className="user-info">
                {/* aqui vai ser mostrado o avatar da google e o nome do user google */}
                <img src={author.avatar} alt={author.name} />
                <span>{author.name}</span>
            </div>
            <div>
                {/* para o user aqui vai ter o like-button, para o admin aqui vai ter highlight, answer, delete */}
                {children}
            </div>
            </footer>
        </QuestionStyle>
    )
}

export const Question = memo(QuestionComponent);