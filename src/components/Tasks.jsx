import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onTrashButtonClick}){
     const navigate = useNavigate();

     function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
     }

    return(
        <div className="containerLista">
            <ul className="listaTarefas">
                {tasks.map((task) => (
                <li key={task.id}>
                    
                    <button onClick={()=> onTaskClick(task.id)}  className={task.isCompleted ? "tarefaCompleta" : "tarefaIncompleta"}>
                        
                        {task.title}
                        {task.isCompleted ? " - Completa" : " - Incompleta"}
                    </button>
                
                    <div>
                        <button onClick={() => onSeeDetailsClick(task)} className="btnVerInfo"><ChevronRightIcon /></button>
                        <button onClick={()=> onTrashButtonClick(task.id)} className="btnDelInfo"><TrashIcon /></button>
                    </div>
                </li>))}
            </ul>
        </div>  
    )
}

export default Tasks;