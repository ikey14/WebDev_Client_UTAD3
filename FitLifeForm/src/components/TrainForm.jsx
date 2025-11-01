import { useForm } from "react-hook-form";
//import { useState } from "react";

import PayForm from './PayForm'

export default function TrainForm({changeState}) {

    const saved = localStorage.getItem('reg');
    const defaultValues = saved ? JSON.parse(saved) : {};

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues});

    const onSubmit = (data) => {
        //add to local storage
        console.log(JSON.stringify(data));
        localStorage.setItem("reg", JSON.stringify(data));
        changeState(3);
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Prefered Training Type</label>
            <select {...register('ptt', { required: true })}>
                <option value="wl">Weight Lifting</option>
                <option value="cal">Calisthenics</option>
                <option value="ath">Athletic</option>
                <option value="crf">Crossfit</option>
                <option value="oth">Other</option>
            </select>
            {errors.ptt?.type === 'required' && "Specify prefered training type."}
        </div>
        <div>
            <label>Objectives</label>
            <select {...register('objectives', { required: true })}>
                <option value="wl">Weight Loss</option>
                <option value="wg">Weight Gain</option>
                <option value="str">Strength Gain</option>
                <option value="spe">Speed Gain</option>
                <option value="gen">General exercise to stay somewehat in shape</option>
                <option value="oth">Other</option>
            </select>
            {errors.objectives?.type === 'required' && "Specify objectives"}
        </div>
        <input type = "submit" />
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