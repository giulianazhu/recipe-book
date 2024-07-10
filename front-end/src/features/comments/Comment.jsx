import { useState } from "react";
import useAddComment from "./useAddComment";
import StarRating from "../../ui/StarRating";
import { calcArrObjValAvg } from "../../utils/utils";

export default function Comment({ comments, recipeId }) {
  const [rating, setRating] = useState(0);
  console.log("rating", rating);
  const { mutate: handleAddComment, isPending: isAdding } =
    useAddComment(recipeId);

  const avgRating = calcArrObjValAvg(comments, "rating");
  console.log(avgRating);
  //  sometimes fail to get comments ==> cannot iterate on second render sometimes

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, val] of formData) {
      data[key] = val;
    }
    data.date = new Date().toISOString();
    data.rating = parseInt(rating);
    console.log("data sent", JSON.stringify(data));
    handleAddComment(data);
  }

  function handleRating(val) {
    setRating(val);
  }
  return (
    <div>
      <h2>{comments.length} user reviews</h2>
      <span>Average rating: {avgRating} </span>
      <div>
        {comments.map((comment) => (
          <li key={comment.id}>
            <StarRating disabled={true} value={parseInt(comment.rating)} />
            {`${comment.id}. ${comment.comment}`}
          </li>
        ))}
      </div>
      <div>
        <h4>Rate the recipe</h4>
        <h4>Post a Comment</h4>
        <form onSubmit={handleSubmit}>
          <StarRating handleRating={handleRating} name="rating" />
          <textarea name="comment" id=""></textarea>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}
