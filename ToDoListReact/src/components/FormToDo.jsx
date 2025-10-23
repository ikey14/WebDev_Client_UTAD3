import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//FormTo DO FORM TO ADD NEW TASKS
    //Formulario de texto + botón enter para añadir ToDo's nuevos

export default function FormToDo({onFormSubmit}) 
{
  const [input, setInput] = useState("");

  const handleChange = (content) => {setInput(content.target.value);}

  const handleSend = (content) => {
    content.preventDefault(); //no recarga pág.
    const newTask = {
      //genera un id único llamando a uuidv4
      id: uuidv4(),
      taskText: input,
      completed: false
    }
    setInput("");
    onFormSubmit(newTask) //onSubmit es una prop
  }

  return (<div>
    <form onSubmit = {handleSend}>
      <input
        className = 'inputToDo'
        type = 'text'
        placeholder = 'Describe task'
        name = 'newTask'
        value = {input}
        onChange = {handleChange}
      />
      <button className = "buttonFormToDo">ADD TASK</button>
    </form>

    </div>);
}