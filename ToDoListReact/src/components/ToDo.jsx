import { useState } from 'react';

//ToDo TASK
    //Bloque de construcción básico para ListToDo.
    //Tarea básica que puede estar tachada o no, incluye dos botones (Complete / Delete)

export default function ToDo({id, taskText, complete, changeTaskStatus, killTask})
{
    return(<div>
    <button onClick = {() => changeTaskStatus(id)}>
        <span style={{textDecoration: complete ? "line-through" : "none"}}>{taskText}</span>
    </button>
    <button onClick = {() => killTask(id)}>✖</button>
    </div>)

}