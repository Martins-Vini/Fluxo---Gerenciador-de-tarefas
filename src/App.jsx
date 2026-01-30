import Tasks from "./components/Tasks.jsx"
import AddTask from "./components/AddTask.jsx"
import {v4} from "uuid"
import { useState, useEffect } from "react"
import "./App.css"

function App(){
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('http://localhost:8080/tasks');
      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  }, []);


  async function addTask(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };

    await fetch('http://localhost:8080/tasks', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    });

    setTasks([...tasks, newTask]);
  }

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