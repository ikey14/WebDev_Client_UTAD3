import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo'
import ToDo from './components/ToDo'
import FormToDo from './components/FormToDo'
import ListToDo from './components/ListToDo'

function App() 
{
  return (<>
      
      <Logo altText = "Viva el Betis" imgSrc = "real-betis-logo.png" />
      {/* <ToDo task = "Testing" /> */}
      {/* <FormToDo /> */}
      <ListToDo />

      <audio src = "TV_World_EX.mp3" autoPlay loop/>

    </>)
}

export default App
