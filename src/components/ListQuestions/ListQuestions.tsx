import { useEffect } from "react";

function ListQuestions({ list, sortDirection }: { list:Array<Object>, sortDirection:boolean }) {

    useEffect(() => {
        console.log(list);
    }, [])

    const listRender = list.map((item:any) => (
        <li key={item.question_id}>{item.title}</li>
    ))

    return (
        <ul>
            {listRender}
        </ul>
    )
}

export default ListQuestions;