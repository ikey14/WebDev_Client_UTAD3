import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo'
import ToDo from './components/ToDo'

function App() 
{
  return (<>
      
      <Logo altText = "Viva el Betis" imgSrc = "real-betis-logo.png" />
      <ToDo task = "Testing" />

    </>)
}

export default App
