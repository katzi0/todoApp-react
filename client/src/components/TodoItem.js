import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            <input className="toggle" checked={props.checked} type="checkbox" onChange={(e)=>{props.handleToggle(props.id,e)}}/>
            <label>{props.todo}</label>
            <span onClick={()=>props.handleDelete(props.id)}>&nbsp; x &nbsp;</span>
        </li>
    )
}

export default TodoItem
