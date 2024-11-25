import React, { useState } from "react";
import TaskInput from "./TaskInput";
import './home.css';
import TaskItem from "./TaskItem";

const Home=()=>{
    const [todoList, setTodolist] = useState([]);
    const addTask = (taskName)=>{
        const newTask = {taskName, checked: false};
        setTodolist([...todoList,newTask])
    };
    console.log(todoList);

    return(
        <>
            <div className="container">
                <h1>To-Do-List</h1>
                <TaskInput addTask={addTask}/>
                <div className="todolist">
                    <span>To Do</span>
                    <ul className="list-items"></ul>
                        {todoList.map((task, key)=>(
                            <TaskItem task={task} key={key}/>
                        ))}
                </div>

            </div>
        </>
    );
}
export default Home;