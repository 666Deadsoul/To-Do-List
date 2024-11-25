import React, { useState } from "react";
import TaskInput from "./TaskInput";
import './home.css';
import TaskItem from "./TaskItem";
import Stats from "./Stats";

const Home=()=>{
    const [todoList, setTodolist] = useState([]);
    const addTask = (taskName)=>{
        const newTask = {taskName, checked: false};
        setTodolist([...todoList,newTask])
    };
    console.log(todoList);
    
    function deleteTask(deleteTaskName){
        setTodolist(todoList.filter(task=>task.taskName !== deleteTaskName));
    }

    function toggleCheck(taskName){
        setTodolist((prevTodolist) => 
            prevTodolist.map((task)=> task.taskName === taskName? {...task, checked: !task.checked}:task
        ))
    }

    return(
        <>
            <div className="container">
                <h1>To-Do-List</h1>
                <TaskInput addTask={addTask}/>
                <div className="todolist">
                    <span>To Do</span>
                    <ul className="list-items">
                        {todoList.map((task, key)=>(
                            <TaskItem task={task} key={key}
                            deleteTask = {deleteTask}
                            toggleCheck = {toggleCheck}
                            />
                        ))}
                    </ul>
                    {todoList.length === 0? (<p className="notify">You are done!</p>) : null}
                </div>
            </div>
            <Stats todoList={todoList}/>
        </>
    );
}
export default Home;