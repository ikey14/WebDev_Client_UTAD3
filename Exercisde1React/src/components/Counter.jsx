import { useState } from "react"
import { useRef } from "react"


export default function Counter()
{
    const [counter, setCount] = useState(0);
    let privCounter = useRef(0);
    //let privCounter = counter;

    return(<>

        <h1>Counter: {counter}</h1>
        <button onClick = {() => privCounter.current++}>COUNT UP</button>
        <button onClick = {() => setCount(privCounter.current)}>SHOW COUNT</button>
        <button onClick = {() => {privCounter.current = 0; setCount(0);}}>RESET</button>
        
        
    </>)
}