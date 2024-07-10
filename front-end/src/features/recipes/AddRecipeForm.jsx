import useAddRecipe from "./useAddRecipe";
import useFilters from "../search/useFilters";
import { useForm } from "react-hook-form";

export default function AddRecipeForm() {
  const { cuisines, diets, difficulties } = useFilters();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      ingredients: "",
      instructions: "",
      cuisineId: "",
      dietId: "",
      difficultyId: "",
      image: null,
    },
    mode: "onBlur",
  });

  const { mutate: handleAddRecipe, isPending } = useAddRecipe();

  function onSubmit(data) {
    const formData = new FormData();
    for (let props in data) {
      formData.append(props, data[props]);
    }
    formData.set("image", data.image[0]);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    handleAddRecipe(formData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label htmlFor="name">Recipe Name</label>
        <input
          name="name"
          type="text"
          id="name"
          {...register("name", { required: "Recipe name is required" })}
        />
        <span>{errors?.name && errors?.name?.message}</span>
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          id="ingredients"
          {...register("ingredients", {
            required: "Ingredients list is required",
          })}
        ></textarea>
        <span>{errors?.ingredients && errors?.ingredients?.message}</span>
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          {...register("instructions", {
            required: "Instructions are required",
          })}
        />
        <span>{errors?.instructions && errors?.instructions?.message}</span>
      </div>
      <div>
        <label htmlFor="cuisineId">Select Cuisine Category</label>
        <select
          name="cuisineId"
          id="cuisineId"
          {...register("cuisineId", {
            required: "Please, select a cuisine",
          })}
        >
          {cuisines.map((cuisine) => (
            <option value={cuisine.id} key={cuisine.id}>
              {cuisine.name}
            </option>
          ))}
        </select>
        <span>{errors?.cuisineId && errors?.cuisineId?.message}</span>
      </div>
      <div>
        <label htmlFor="dietId">Select Dietary Preference</label>
        <select
          name="dietId"
          id="dietId"
          {...register("dietId", {
            required: "Please, select a dietary preference",
          })}
        >
          {diets.map((diet) => (
            <option value={diet.id} key={diet.id}>
              {diet.name}
            </option>
          ))}
        </select>
        <span>{errors?.dietId && errors?.dietId?.message}</span>
      </div>
      <div>
        <label htmlFor="difficultyId">Select Difficulty Level</label>
        <select
          name="difficultyId"
          id="difficultyId"
          {...register("difficultyId", {
            required: "Please, select a difficulty level",
          })}
        >
          {difficulties.map((difficulty) => (
            <option value={difficulty.id} key={difficulty.id}>
              {difficulty.name}
            </option>
          ))}
        </select>
        <span>{errors?.difficultyId && errors?.difficultyId?.message}</span>
      </div>
      <div>
        <label htmlFor="image">Upload an Image</label>
        <input
          type="file"
          name="image"
          id="image"
          {...register("image", { required: "Please, attach recipe image" })}
        />
        <span>{errors?.image && errors?.image?.message}</span>
      </div>
      <button>{isPending ? "Submitting" : "Submit"}</button>
    </form>
  );
}
