import { NavLink, Outlet, useLoaderData } from "react-router-dom"



const Team = () => {
    const data = useLoaderData()
    
  return (
    <div className="flex">
        <div className="flex flex-col gap-2 w-max">
            {data.map((user) => (
                <NavLink to={`/team/${user.id}`} key={user.id} className="text-black bg-blue-400 p-5 font-bold"> {user.name} </NavLink>
            ))}
        </div>
        <Outlet />
    </div>
  )
}

export default Team