import { useEffect } from "react";
import { useState } from "react";

export default function APICall({changeState})
{
    const [message, setMessage] = useState("");

    const SaveRegister = async() => {

        const localRegister = localStorage.getItem("reg");
        const totalRegister = localRegister ? JSON.parse(localRegister) : {};

        //taken from document with task instructions and modified
        try 
        {
            const respuesta = await fetch('https://api.fitlife.com/registro', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(totalRegister),
            });

            if (respuesta.ok) 
            {
                // Mostrar mensaje de éxito
                console.log('Usuario registrado correctamente');
                setMessage("You have been registered successfully.")
            } 
            else 
            {
                // Mostrar mensaje de error
                console.log('Error al registrar usuario');
                setMessage("There is an issue with the connection. Please try again later.")
            }
            
        } 
        catch (error) 
        {
            console.log(error);
            {setMessage("Unexpected Error. Please try again later.")}
        }

    }

    useEffect(() => {

        SaveRegister();

    }, []);

    return(<>
        <h1>{message}</h1>
        <div><button /*onClick = {changeState(1)}*/>Retry</button></div>
        
    </>)
}