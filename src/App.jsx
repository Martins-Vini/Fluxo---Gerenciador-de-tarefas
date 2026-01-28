import Tasks from "./components/Tasks.jsx"
import AddTask from "./components/AddTask.jsx"
import {v4} from "uuid"
import { useState, useEffect } from "react"
import "./App.css"

function App(){
  const [tasks, setTasks] = useState(  
      JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(()=>{ 
    localStorage.setItem("tasks" , JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=>{
      async function consumeAPI(){
         const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10',
          {
            method:"GET",
          }
         );
         const data = await response.json();
         console.log(data);

         setTasks(data)
      }

      consumeAPI()
  }, [])

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