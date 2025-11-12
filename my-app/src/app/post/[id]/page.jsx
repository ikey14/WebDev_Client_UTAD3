import { Suspense } from "react";
import PostPages from '../page'


async function loadPost(id)
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;

}

async function Page({ params })
{
    // console.log(params);
    const {id} = await params;
    const post = await loadPost(id);
    return(<div>
        <h1>Post Page {params.id}</h1>
        <h2>{post.id}. {post.title}</h2>
        <p>{post.body}</p>
        <hr/>
        <h3>Otras publicaciones</h3>
        <Suspense fallback = {<div>Cargando Publicaciones...</div>}>
            <PostPages />
        </Suspense>
    </div>)
}

export default Page;