
async function fetchUsers()
{
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

async function Home() 
{ 
  const users = await fetchUsers();

  return (
    <div>HomePage</div>
  );
}

export default Home
