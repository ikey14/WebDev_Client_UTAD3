import { useState } from 'react';

//ListToDo TASK LIST
    //Lista dónde se juntat todos los ToDo
    //Sospecho que debe tener tamaño dinámico

export default function ListToDo()
{
    const [tasks, setTasks] = useState([]);

    //task.id === id ? { ...task, complete: !task.complete } : task

    const ChangeTaskStatus = (id) => {setTasks};
    const KillTask = (id) => {setTasks(tasks.filter(task => task.id !== id));};

    return(<>
    <div className="list-todo-container">
        {tasks.map((task) => (
            <ToDo 
                key = {task.id} 
                id = {task.id} 
                taskText = {task.taskText} 
                complete = {task.complete}
                changeTaskStatus = {ChangeTaskStatus}
                killTask = {KillTask}
            />
        ))}
    </div>
    </>)
}