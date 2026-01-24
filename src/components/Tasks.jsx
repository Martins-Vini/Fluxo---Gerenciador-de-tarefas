function Tasks(props){
    return(
        <div className="containerLista">
            <ul className="listaTarefas">
                {props.tasks.map((task) => <li key={task.id}>{task.title}</li>)}
            </ul>
        </div>  
    )
}

export default Tasks;