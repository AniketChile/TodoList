import './App.css'
import React, { useState } from 'react'
import TaskList from './component/TaskList'

function App() {

  const [newTask,setNewTask] = useState('')
  const [task,setTask] = useState([])

  

  const addTask = () =>{

    if(newTask === '') return;

    setTask([...task,{id:task.length,text:newTask,isDone:false}]);
    setNewTask('')
  }

  const editTask = (taskId) =>{
    const updatedTask = prompt('Enter to Update Task')
    if(updatedTask === '') return;
    setTask(task.map(task=>(
      taskId === task.id ? {...task,text:updatedTask} : task
    )))
  }

  const deleteTask = (taskId) =>{
    setTask(task.filter(task=>(
      taskId !== task.id
    )))
  }

  const toggleDown = (taskId) =>{
    setTask(task.map(task=>(
      taskId === task.id ? {...task,isDone:!task.isDone} : task
    )))
  }

  return (
     <>
      <div>
            <div>
              <input 
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                type="text" placeholder='Enter the Task' />
              <button onClick={addTask}>Add Task</button>
            </div>

            <div>
              <TaskList task={task} editTask={editTask} deleteTask={deleteTask} toggleDown={toggleDown}/>
            </div>

      </div>
    </>
  )
}

export default App
