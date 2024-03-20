import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-500 flex items-center justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/team">Team</NavLink>
    </div>
  )
}

export default Navbar