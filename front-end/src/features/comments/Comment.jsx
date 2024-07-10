import { useState } from "react";
import useAddComment from "./useAddComment";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comment({ comments, recipeId }) {
  // const [rating, setRating] = useState(0);
  // console.log("rating", rating);
  // const { mutate: handleAddComment, isPending } = useAddComment(recipeId);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = {};
  //   for (let [key, val] of formData) {
  //     data[key] = val;
  //   }
  //   data.date = new Date().toISOString();
  //   data.rating = parseInt(rating);
  //   console.log("data sent", JSON.stringify(data));
  //   handleAddComment(data);
  // }

  // function handleRating(val) {
  //   setRating(val);
  // }

  return (
    <div>
      <CommentList comments={comments} />
      <CommentForm recipeId={recipeId} />
    </div>
  );
}
