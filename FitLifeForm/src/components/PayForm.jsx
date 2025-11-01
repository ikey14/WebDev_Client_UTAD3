import { useForm } from "react-hook-form";
//import { useState } from "react";

export default function PayForm({changeState}) {

    const saved = localStorage.getItem('reg');
    const defaultValues = saved ? JSON.parse(saved) : {};

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues});

    const onSubmit = (data) => {
        
        //setShowPayForm(true);
        console.log(JSON.stringify(data));
        localStorage.setItem("reg", JSON.stringify(data));
        //Send to API component so that it calls to the "server"
        changeState(4);
    }

    
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Credit Card Number</label>
            <input type = "number" {...register('cvv', { required: true /*, maxLength: 20*/ })} />
            {errors.cvv?.type === 'required' && "Credit Card Number is required"}
            {/* {errors.username?.type === 'maxLength' && "Username debe tener menos de 20 caracteres"} */}
        </div>
        <div>
            <label>Security Code</label>
            <input type = "number" {...register('secCode', { required: true, maxLength: 3 })} />
            {errors.secCode?.type === 'required' && "Security is required"}
            {errors.secCode?.type === 'maxLength' && "Not a valid security number."}
        </div>
        <div>
            <label>Owner</label>
            <input {...register('owner', { required: true })} />
            {errors.owner?.type === 'required' && "Owner is required"}
        </div>
        <input type = "submit" />
        </form>
    );
}



    // <div>
    //     <label>País</label>
    //     <select {...register('country', { required: true })}>
    //         <option value="es">España</option>
    //         <option value="it">Italia</option>
    //         <option value="pt">Portugal</option>
    //     </select>
    //     {errors.country?.type === 'required' && "Country es requerido"}
    // </div>