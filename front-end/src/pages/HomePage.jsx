import { NavLink } from "react-router-dom";
import usePrefetchRecipes from "../features/recipes/usePrefetchRecipes";

export default function HomePage() {
  usePrefetchRecipes();
  return (
    <div>
      <NavLink to="/search">Explore</NavLink>
    </div>
  );
}
