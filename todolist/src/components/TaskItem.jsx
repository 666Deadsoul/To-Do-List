import React from 'react'
import {FaTrash as Trash} from "react-icons/fa";

const TaskItem = ({task, deleteTask, toggleCheck}) => {
  return (
    <>
        <li className="items">
            <div className="items-text">
                <input type="checkbox" checked={task.checked}
                onChange={() => toggleCheck(task.taskName)} />
                <p className={task.checked? 'isChecked' : ''}>{task.taskName}</p>
            </div>
            <Trash className="delete_icon" onClick={()=> deleteTask(task.taskName)}/>
        </li>
    </>
  )
}

export default TaskItem;  
