import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseForm from './components/BaseForm'
import TrainForm from './components/TrainForm'
import PayForm from './components/PayForm'
import APICall from './components/APICall'

function App() {
  const [formState, setFormState] = useState(1)

  return(<>
  
    {formState == 1 && <BaseForm changeState = {setFormState} />}
    {formState == 2 && <TrainForm changeState = {setFormState} />}
    {formState == 3 && <PayForm changeState = {setFormState} />}
    {formState == 4 && <APICall changeState = {setFormState}/>}
  
  </>)
}

export default App
