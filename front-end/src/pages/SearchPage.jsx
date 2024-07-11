import RecipeSearch from "../features/recipes/RecipeSearch";
import { StyledPage } from "../styles/StyledComponents";

export default function SearchPage() {
  return (
    <StyledPage as="main">
      <RecipeSearch />
    </StyledPage>
  );
}
