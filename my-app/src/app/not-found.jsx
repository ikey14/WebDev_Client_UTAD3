import Link from "next/link"

export default function NotFound()
{
    return(<>
    
        <h1>404</h1>
        <p>Non-existent page</p>
        <Link href = "/">Go Back</Link>
    
    </>)
}