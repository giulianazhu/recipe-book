import StarRating from "../../ui/StarRating";
import useAddComment from "./useAddComment";
import { Controller, useForm } from "react-hook-form";

export default function CommentForm({ recipeId }) {
  const { mutate: handleAddComment, isPending } = useAddComment(recipeId);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    data.date = new Date().toISOString();
    data.rating = parseInt(data.rating);
    console.log("data sent", JSON.stringify(data));
    handleAddComment(data);
  }

  return (
    <div>
      <h4>Post a Review</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name="rating"
            rules={{ required: "Rating is required" }}
            render={({ field: { onChange, value } }) => (
              <StarRating
                onChange={onChange}
                name="rating"
                isPending={isPending}
                value={value}
              />
            )}
          />
          <span>{errors?.rating && errors?.rating?.message}</span>
        </div>
        <div>
          <label htmlFor="comment">Write a comment</label>
          <textarea name="comment" id="comment" {...register("comment")} />
        </div>
        <button>{isPending ? "Posting" : "Post"}</button>
      </form>
    </div>
  );
}
