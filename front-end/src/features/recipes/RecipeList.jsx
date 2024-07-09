import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";

export default function RecipeList({
  recipes,
  nextPage,
  prevPage,
  page,
  isPending,
}) {
  return (
    <div>
      <h2>Results</h2>
      <div>
        <span>{`Curr page: ${page}    `}</span>
        <button onClick={prevPage}>prevPage</button>
        <button onClick={nextPage}>nextPage</button>
      </div>
      <div style={{ border: "2px solid black" }}>
        {recipes ? (
          // temp style
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h3>
                  <span>{`${recipe.id}. `}</span>
                  {recipe.name}
                  <NavLink to={`/search/${recipe.id}`}>Recipe Details</NavLink>
                </h3>
                {/* temp style */}
                <img
                  src={`${urlport}${recipe.image}`}
                  alt={`${recipe.image}`}
                  width="150"
                />
                <span>{`Cuisine: ${recipe.cuisine.name}`}</span>
                <span>{`Dietary preference: ${recipe.diet.name}`}</span>
                <span>{`Difficulty: ${recipe.difficulty.name}`}</span>
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>{isPending && "Loading..."}</h2>
        )}
      </div>
    </div>
  );
}
