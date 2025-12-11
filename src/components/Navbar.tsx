import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-sky-600">
        <nav className="text-white flex justify-around items-center w-full h-10">
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/auth">Login/Registration</NavLink>

    </nav>
    </div>
  );
}

export default Navbar;