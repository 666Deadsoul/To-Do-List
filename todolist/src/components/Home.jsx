import React from "react";
import TaskInput from "./TaskInput";
import './home.css';

const Home=()=>{
    return(
        <>
            <div className="container">
                <h1>To-Do-List</h1>
                <TaskInput/>
                <div className="todolist">
                    <span>To Do</span>
                    <ul className="list-items"></ul>
                </div>

            </div>
        </>
    );
}
export default Home;