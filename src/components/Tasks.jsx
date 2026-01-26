import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onTrashButtonClick}){
    
    return(
        <div className="containerLista">
            <ul className="listaTarefas">
                {tasks.map((task) => (
                <li key={task.id}>
                    
                    <button onClick={()=> onTaskClick(task.id)}  className={task.isCompleted ? "tarefaCompleta" : "tarefaIncompleta"}>
                        
                        {task.title}
                        {task.isCompleted ? " - Completa" : " - Incompleta"}
                    </button>
                
                    <button className="btnVerInfo"><ChevronRightIcon /></button>

                    <button onClick={()=> onTrashButtonClick(task.id)} className="btnDelInfo"><TrashIcon /></button>
                </li>))}
            </ul>
        </div>  
    )
}

export default Tasks;