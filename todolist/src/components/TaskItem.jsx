import React from 'react'


const TaskItem = ({task}) => {
  return (
    <>
        <li className="items">
            <div className="items-text">
                <input type="checkbox" />
                <p>{task.taskName}</p>
            </div>
            <a className="delete_icon">Delete</a>
        </li>
    </>
  )
}

export default TaskItem;  
