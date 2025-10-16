import './ToDoList.css'

export default function Paisaje({name, imgSrc})
{
    return(<>

        <h1>{name}</h1>
        <img className = "sameSizeImg" src = {imgSrc} alt = {name} />

    </>)
}