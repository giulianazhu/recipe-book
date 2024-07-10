import StarRating from "../../ui/StarRating";

export default function CommentForm({ handleSubmit, handleRating, isPending }) {
  return (
    <div>
      <h4>Rate the recipe</h4>
      <h4>Post a Comment</h4>
      <form onSubmit={handleSubmit}>
        <StarRating handleRating={handleRating} name="rating" />
        <textarea name="comment" id=""></textarea>
        <button>{isPending ? "Posting" : "Post"}</button>
      </form>
    </div>
  );
}
