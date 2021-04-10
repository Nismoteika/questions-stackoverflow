import { useEffect } from "react";
import './ListQuestions.scss';

function ListQuestions({ list, sortDirection }: { list:Array<Object>, sortDirection:boolean }) {

    useEffect(() => {
        console.log(list);
    }, [])

    const listRender = list.map((question:any) => (
        <li key={question.question_id}>
            <a href={question.link} className="question__block">
                <img src={question.owner.profile_image}
                    alt={question.owner.display_name}
                    className={"question__avatar"} />
                {question.title}
            </a>
        </li>
    ))

    return (
        <ul className="list-questions">
            {listRender}
        </ul>
    )
}

export default ListQuestions;