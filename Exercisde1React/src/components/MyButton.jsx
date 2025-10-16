
export default function MyButton({name, msg})
{
    function ShowMsgAsAlert(msg)
    {
        alert(msg);
    }

    return(<>

        <button onClick = {() => ShowMsgAsAlert(msg)}>{name}</button>
        
    </>)
}