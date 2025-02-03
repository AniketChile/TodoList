import React from 'react'

const TaskItem = ({task,toggleDown,editTask,deleteTask}) => {
  return (
  <div key={task.id}>
      <h3 style={{textDecoration : task.isDone ? 'line-through' : 'none'}}>{task.text}</h3>
      <button className='p-3' onClick={()=>editTask(task.id)}>Edit Task</button>
      <button className='p-3' onClick={()=>toggleDown(task.id)}>Done</button>
      <button className='p-3'  onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
