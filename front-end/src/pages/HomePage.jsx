import { NavLink } from "react-router-dom";
import usePrefetchRecipes from "../features/recipes/usePrefetchRecipes";
import { StyledPage } from "../styles/StyledComponents";

export default function HomePage() {
  usePrefetchRecipes();
  return (
    <StyledPage as="main">
      <NavLink to="/search">Explore</NavLink>
    </StyledPage>
  );
}
