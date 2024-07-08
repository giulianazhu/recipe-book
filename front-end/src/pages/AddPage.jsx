import { addRecipe } from "../services/apiRecipes";

export default function AddPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    addRecipe(formData);
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input name="name" type="text" />
      <input type="text" name="ingredients" />
      <input type="text" name="instructions" />
      <select name="cuisineId" id="">
        <option value={1}>Italian</option>
      </select>
      <select name="dietId" id="">
        <option value={1}>Vegetarian</option>
      </select>
      <select name="difficultyId" id="">
        <option value={1}>Easy</option>
      </select>
      <input type="file" name="image" />
      <button>Submit</button>
    </form>
  );
}
