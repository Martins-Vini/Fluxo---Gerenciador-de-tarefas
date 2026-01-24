import Tasks from "./components/Tasks.jsx"
import AddTask from "./components/AddTask.jsx"
import { useState } from "react"
import "./App.css"

function App(){
  const [tasks, setTasks] = useState([
    {
      id:1,
      title:"Estudar React",
      description:"Ver fundamentos de React",
      isCompleted: false
    },
    {
      id:2,
      title:"Lavar louça",
      description:"Lavar, secar e guardar louça",
      isCompleted: false
    },
    {
      id:3,
      title:"Limpar casa",
      description:"Varrer toda casa e limpar móveis",
      isCompleted: false
    }

  ])
  return(
    <div className="telaPrincipal">
      <div>
          <h1 className="titulo">Gerenciador de tarefas</h1>
      </div>
      <AddTask />    
      <Tasks tasks={tasks}/> 
    </div>
  )
}


export default App;