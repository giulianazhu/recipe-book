import useAddRecipe from "./useAddRecipe";
import useFilters from "../search/useFilters";

export default function AddRecipeForm() {
  const { cuisines, diets, difficulties } = useFilters();

  const { mutate: handleAddRecipe, isPending } = useAddRecipe();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    handleAddRecipe(formData);
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input name="name" type="text" />
      <input type="text" name="ingredients" />
      <input type="text" name="instructions" />
      <select name="cuisineId" id="">
        {cuisines.map((cuisine) => (
          <option value={cuisine.id} key={cuisine.id}>
            {cuisine.name}
          </option>
        ))}
      </select>
      <select name="dietId" id="">
        {diets.map((diet) => (
          <option value={diet.id} key={diet.id}>
            {diet.name}
          </option>
        ))}
      </select>
      <select name="difficultyId" id="">
        {difficulties.map((difficulty) => (
          <option value={difficulty.id} key={difficulty.id}>
            {difficulty.name}
          </option>
        ))}
      </select>
      <input type="file" name="image" />
      <button>{isPending ? "Submitting" : "Submit"}</button>
    </form>
  );
}
