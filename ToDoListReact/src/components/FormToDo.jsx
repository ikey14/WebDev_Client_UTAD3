import { useState } from 'react';

//FormTo DO FORM TO ADD NEW TASKS
    //Formulario de texto + botón enter para añadir ToDo's nuevos

export default function FormToDo() 
{
  const [newTask, setNewTask] = useState('');

  function AddTask(newTask) 
  {
    alert(newTask);
    setNewTask('');
  }

  return (<div>
      <input
        className = 'inputToDo'
        type = 'text'
        placeholder = 'Describe task'
        name = 'newTask'
        value = {newTask}
        onChange = {event => setNewTask(event.target.value)}
      />
      <button onClick = {() => AddTask(newTask)}>ADD</button>
    </div>);
}