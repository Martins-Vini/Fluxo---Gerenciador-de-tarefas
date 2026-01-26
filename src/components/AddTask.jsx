import { useState } from "react"

function AddTask({ onAddTask }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return(
        <div className="containerAddTarefa">
            <div>
                <input value={title} onChange={(event)=> setTitle(event.target.value)} placeholder="Título da tarefa" type="text" />
            </div>

            <div>
                <input value={description} onChange={(event)=> setDescription(event.target.value)} placeholder="Descrição da tarefa" type="text" />
            </div>

            <div><button onClick={()=> {
                if(!title.trim() || !description.trim()){
                    return alert("Adicione tarefas com nome e descrição, sem espaços em branco")
                }
                onAddTask(title, description)
                setTitle("")
                setDescription("")
            }}>Adicionar Tarefa</button></div>
        </div>
    )
}

export default AddTask