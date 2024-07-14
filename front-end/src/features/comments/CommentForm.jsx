import styled from "styled-components";
import { StyledFlexBox, StyledHeading } from "../../styles/StyledComponents";
import StarRating from "../../ui/StarRating";
import useAddComment from "./useAddComment";
import { Controller, useForm } from "react-hook-form";
import Error from "../../layouts/Error";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 1em;
  & button {
    padding: 0.2em 1em;
    align-self: flex-end;
    border: var(--color-orange-100) 2px solid;
    border-radius: 15px;
    background-color: var(--color-orange-300);
  }
`;

const StyledTextBox = styled.textarea`
  padding: 0.5em;
  border: var(--color-sky-500) 2px solid;
  border-radius: 15px;
  background-color: var(--color-sky-200);
  &:focus {
    outline: none;
    border: var(--color-blue-500) 2px solid;
  }
`;

export default function CommentForm({ recipeId }) {
  const {
    mutate: handleAddComment,
    isPending,
    isError,
    error,
  } = useAddComment(recipeId);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    data.date = new Date().toISOString();
    data.rating = parseInt(data.rating);
    console.log("data sent", JSON.stringify(data));
    handleAddComment(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  if (isError)
    return <Error>{error?.message ?? "Error: Try again later"}</Error>;

  return (
    <StyledFlexBox $direction="column">
      <StyledHeading as="h4">Post a Review</StyledHeading>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFlexBox>
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
                size="large"
              />
            )}
            disabled={isPending}
          />
          <span>{errors?.rating && errors?.rating?.message}</span>
        </StyledFlexBox>
        <StyledFlexBox $direction="column">
          <label htmlFor="comment">Write a comment</label>
          <StyledTextBox
            name="comment"
            id="comment"
            {...register("comment", { disabled: isPending })}
            placeholder="Write a comment ..."
          />
        </StyledFlexBox>
        <button disabled={isPending}>{isPending ? "Posting" : "Post"}</button>
      </StyledForm>
    </StyledFlexBox>
  );
}
