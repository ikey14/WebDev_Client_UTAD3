import { useState } from 'react';
import FormToDo from './FormToDo';
import ToDo from './ToDo';

//ListToDo TASK LIST
    //Lista dónde se juntat todos los ToDo
    //Sospecho que debe tener tamaño dinámico

export default function ListToDo()
{
    const [tasks, setTasks] = useState([]);

    //task.id === id ? { ...task, complete: !task.complete } : task

    const AddTask = (task) => {setTasks([...tasks, task])};
    const ChangeTaskStatus = (id) => {setTasks(tasks.map(task => task.id === id ? { ...task, complete: !task.complete } : task));};
    const KillTask = (id) => {setTasks(tasks.filter(task => task.id !== id));};

    return(<div>
    <FormToDo onFormSubmit = {AddTask}/>
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
    </div>)
}