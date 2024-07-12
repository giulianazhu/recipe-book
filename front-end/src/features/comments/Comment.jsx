import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comment({ comments, recipeId }) {
  return (
    <div>
      <CommentList comments={comments} />
      <CommentForm recipeId={recipeId} />
    </div>
  );
}
