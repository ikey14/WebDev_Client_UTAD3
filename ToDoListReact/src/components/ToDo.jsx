import { useState } from 'react';

//ToDo TASK
    //Bloque de construcción básico para ListToDo.
    //Tarea básica que puede estar tachada o no, incluye dos botones (Complete / Delete)

export default function ToDo({task})
{
    const [isDone, setIsDone] = useState(false);


    function KillTask()
    {
        //This function should probably call a the corresponding function from "FormToDo"
        alert("TASK KILLED");
    }

    function ChangeTaskStatus()
    {
        setIsDone(prev => !prev);
    }

    return(<>
    <button onClick = {() => ChangeTaskStatus()}>
        <span style={{textDecoration: isDone ? "line-through" : "none"}}>{task}</span>
        <button onClick = {() => KillTask()}>✖</button>
    </button>
    </>)

}


// export default function MyButton({name, msg})
// {
//     function ShowMsgAsAlert(msg)
//     {
//         alert(msg);
//     }

//     return(<>

//         <button onClick = {() => ShowMsgAsAlert(msg)}>{name}</button>
        
//     </>)
// }