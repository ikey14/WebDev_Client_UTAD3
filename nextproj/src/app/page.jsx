import Users from "@/components/Users";

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
  const tempUsers = ["MJ", "The other MJ", "Daigo from EVO moment 37", "The Costco CEO that didn't > 1.50$ hotdogs (my man)", "Pocoyó (mi pana)", "Samurai Jack"];

  let counter = 0;

  return (

    <div>HomePage
      {tempUsers.map(user => (
        <Users
          id = {counter++}
          key = {counter}
          name = {user}
        />
      ))}
    </div>
    

  );
}

export default Home
