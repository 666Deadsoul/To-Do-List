import React, { useState } from "react";
import TaskInput from "./TaskInput";
import './home.css';

const Home=()=>{
    const [todolist, setTodolist] = useState([]);
    const addTask = (taskName)=>{
        const newTask = {taskName, checked: false};
        setTodolist([...todolist,newTask])
    };
    console.log(todolist);

    return(
        <>
            <div className="container">
                <h1>To-Do-List</h1>
                <TaskInput addTask={addTask}/>
                <div className="todolist">
                    <span>To Do</span>
                    <ul className="list-items"></ul>
                </div>

            </div>
        </>
    );
}
export default Home;