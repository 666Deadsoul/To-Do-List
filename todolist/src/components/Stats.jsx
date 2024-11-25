import React from 'react'

const Stats = ({todoList}) => {
    let countLeft = todoList.length;
  return (
    <div className="stats">
      {countLeft == 0? "You got everything! Yeppieee..": `You have
      ${countLeft} task on your list.`}
    </div>
  )
}

export default Stats;
