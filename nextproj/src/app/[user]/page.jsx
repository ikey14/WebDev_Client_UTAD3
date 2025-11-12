

async function Page({ params })
{
    // const {id} = await params;
    const {name} = await params;

    return(<div>
        <h1>{name}</h1>
        <p>I like this person. They funny.</p>
    </div>)
}

export default Page;