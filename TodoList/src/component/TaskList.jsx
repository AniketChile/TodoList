import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({task,toggleDown,editTask,deleteTask}) => {
  return (
    <div>
      {task.map(task=>(
        <div key={task.id}>
            <TaskItem task={task} toggleDown={toggleDown} editTask={editTask} deleteTask={deleteTask}/>
        </div>
      ))}
    </div>
  )
}

export default TaskList
