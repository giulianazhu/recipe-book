import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";
import useRecipes from "./useRecipes";

export default function Search() {
  const { data: recipes, isPending } = useRecipes();
  console.log(recipes);
  if (isPending) return <div>Loading ... </div>;
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>
            <span>{`${recipe.id}. `}</span>
            {recipe.name}
            <NavLink to={`/search/${recipe.id}`}>Recipe Details</NavLink>
          </h3>
          <img src={`${urlport}${recipe.image}`} alt={`${recipe.image}`} />
          <span>{`Cuisine: ${recipe.cuisineId}`}</span>
          <span>{`Dietary preference: ${recipe.dietId}`}</span>
          <span>{`Difficulty: ${recipe.difficultyId}`}</span>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </li>
      ))}
    </ul>
  );
}
