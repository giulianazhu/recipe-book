import { useParams } from "react-router-dom";
import useRecipe from "./useRecipe";
import { urlport } from "../../services/config";

export default function RecipeDetails() {
  const { id } = useParams();
  console.log(id);

  const { data, isPending } = useRecipe(id);
  console.log(data);

  if (isPending) return <div>Pending...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={`${urlport}${data.image}`} alt="" />
      <span></span>
      <span></span>
      <span></span>
      <div>
        <h3>Ingredients</h3>
        <p>{data.ingredients}</p>
      </div>
      <div>
        <h2>Instructions</h2>
        <p>{data.instructions}</p>
      </div>
      <div>
        <h2>Comment section</h2>
        <div>
          {data.comments.map((comment) => (
            <li key={comment.id}>{`${comment.id}. ${comment.comment}`}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
