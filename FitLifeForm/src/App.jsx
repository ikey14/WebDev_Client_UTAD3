import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseForm from './components/BaseForm'
import TrainForm from './components/TrainForm'
import PayForm from './components/PayForm'

function App() {
  const [count, setCount] = useState(0)

  return(<>
  
    <BaseForm />
    <TrainForm />
    <PayForm />
  
  </>)
}

export default App
