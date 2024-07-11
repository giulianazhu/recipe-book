import AddRecipeForm from "../features/recipes/AddRecipeForm";
import { StyledPage } from "../styles/StyledComponents";

export default function AddPage() {
  return (
    <StyledPage as="main">
      <AddRecipeForm />
    </StyledPage>
  );
}
