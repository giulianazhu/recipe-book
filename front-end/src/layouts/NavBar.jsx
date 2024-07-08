import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/add">Add Recipe</NavLink>
    </div>
  );
}
