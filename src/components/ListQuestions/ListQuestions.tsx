function ListQuestions({ list }: { list:Array<Object> }) {

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