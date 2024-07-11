import RecipeDetails from "../features/recipes/RecipeDetails";
import { StyledPage } from "../styles/StyledComponents";

export default function RecipePage() {
  return (
    <StyledPage as="main">
      <RecipeDetails />
    </StyledPage>
  );
}
