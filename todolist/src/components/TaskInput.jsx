import React from "react";

const TaskInput =()=>{
    return(
        <>
            <form className="inputField">
                <input type="text" placeholder="Add Item"/>
                <button>+</button>
            </form>
        </>
    );
};
export default TaskInput;