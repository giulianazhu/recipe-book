import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink onClick={(e) => e.preventDefault()}>Dummy</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/add">Add Recipe</NavLink>
    </nav>
  );
}
