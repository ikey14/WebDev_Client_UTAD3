import { useForm } from "react-hook-form";
import { useState } from "react";

import TrainForm from './TrainForm'

export default function BaseForm({changeState}){
    const { register, formState: { errors }, handleSubmit } = useForm();
    //const [showTrainForm, setShowTrainForm] = useState(false);

    const onSubmit = (data) => {
        
        //setShowTrainForm(true);
        //add to local storage
        console.log(data);
        changeState(2);
    }
    
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label>
            <input {...register('name', { required: true /*, maxLength: 20*/ })} />
            {errors.name?.type === 'required' && "Name is required"}
            {/* {errors.username?.type === 'maxLength' && "Username debe tener menos de 20 caracteres"} */}
        </div>
        <div>
            <label>Email</label>
            <input {...register('email', { required: true })} />
            {errors.email?.type === 'required' && "Email is required"}
        </div>
        <div>
            <label>Phone Number</label>
            <input type = "number" {...register('phoneNum', { required: true })} />
            {errors.phoneNum?.type === 'required' && "Phone Number is required"}
        </div>
        <input type="submit" />
        </form>
        
    </>);
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