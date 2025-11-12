import Link from "next/link";


export default function Users({id, name})
{
    return(<div>
        <Link href={`/user/${id}`}>
                <h3 className='text-xl font-bold mb-4'>{name}</h3>
            </Link>
    </div>)
}