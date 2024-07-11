import { NavLink } from "react-router-dom";
import usePrefetchRecipes from "../features/recipes/usePrefetchRecipes";

export default function HomePage() {
  usePrefetchRecipes();
  return (
    <main>
      <NavLink to="/search">Explore</NavLink>
    </main>
  );
}
