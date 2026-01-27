import Tasks from "./components/Tasks.jsx"
import AddTask from "./components/AddTask.jsx"
import {v4} from "uuid"
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

  function onTaskClick(taskId){
    const newTasks = tasks.map(task =>{
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks)
  }

  function addTask(title, description){
    const newTask = {
      id:v4(),
      title:title,
      description:description,
      isCompleted: false
    }
           
    setTasks([...tasks, newTask])
  }

  return(
    <div className="telaPrincipal"> 
      <div>
          <h1 className="titulo">Fluxo - Gerenciador de tarefas</h1>
      </div>
      <AddTask onAddTask={addTask} />    
      <Tasks tasks={tasks} onTrashButtonClick={deleteTask} onTaskClick={onTaskClick}/> 
    </div>
  )
}


export default App;