import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";
import useFilters from "./useFilters";
import { useState } from "react";
import useFilterRecipes from "./useFilterRecipes";

export default function Search() {
  const { cuisines, diets, difficulties } = useFilters();

  const [filters, setFilters] = useState("all"); //can prefetch useRecipe at home page
  const { data: recipes, isPending } = useFilterRecipes(filters);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const filtersObj = {};
    for (let [key, value] of formData.entries()) {
      if (value) {
        filtersObj[key] = value;
      }
    }
    // console.log(filtersObj);
    setFilters(filtersObj);
  }

  if (isPending) return <div>Loading ... </div>;

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Search</label>
          <input type="text" name="name" />
          <div>
            <h4>Filters</h4>
            <ul>
              <h5>Cuisines</h5>
              {cuisines.map((cuisine) => (
                <li key={cuisine.id}>
                  <label htmlFor={cuisine.id}>{cuisine.name}</label>
                  <input
                    type="radio"
                    //if checked false, auto left out from formdata
                    id={cuisine.id}
                    name="cuisineId"
                    value={cuisine.id}
                  />
                </li>
              ))}
            </ul>
            <ul>
              <h5>Dietary Preference</h5>
              {diets.map((diet) => (
                <li key={diet.id}>
                  <label htmlFor={diet.id}>{diet.name}</label>
                  <input
                    type="radio"
                    id={diet.id}
                    name="dietId"
                    value={diet.id}
                  />
                </li>
              ))}
            </ul>
            <ul>
              <h5>Difficulty Level</h5>
              {difficulties.map((difficulty) => (
                <li key={difficulty.id}>
                  <label htmlFor={difficulty.id}>{difficulty.name}</label>
                  <input
                    type="radio"
                    id={difficulty.id}
                    name="difficultyId"
                    value={difficulty.id}
                  />
                </li>
              ))}
            </ul>
          </div>
          <button>Search</button>
        </form>
      </div>
      <div>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>
                <span>{`${recipe.id}. `}</span>
                {recipe.name}
                <NavLink to={`/search/${recipe.id}`}>Recipe Details</NavLink>
              </h3>
              <img src={`${urlport}${recipe.image}`} alt={`${recipe.image}`} />
              <span>{`Cuisine: ${recipe.cuisine.name}`}</span>
              <span>{`Dietary preference: ${recipe.diet.name}`}</span>
              <span>{`Difficulty: ${recipe.difficulty.name}`}</span>
              <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
