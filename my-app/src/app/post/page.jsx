"use server"

import PostCard from '@/components/PostCard'
async function loadPosts() 
{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
}

async function PostPages() 
{
    const posts = await loadPosts()
    return (<div className='grid'>
    
        {posts.map(post => (<PostCard post={post} key={post.id} />))}
    
    </div>)
}
export default PostPages



// async function LoadPosts()
// {
//   //const res = await fetch("https://api.example.com/posts", {cache: 'force-cache'});

//   const res2 = await fetch("https://jsonplaceholder.typicode.com/posts", {next: { revalidate: 3600 }});

//   return res2.json();
// }

// async function PostPages()
// {
//   const posts = await LoadPosts();
//   return(<>

//     {posts.map(post => (
//       <div key = {post.id}>
//         <h3>{post.id}. {post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ))}

//   </>)
// }

// export default PostPages;