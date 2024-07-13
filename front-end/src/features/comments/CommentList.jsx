import styled from "styled-components";
import StarRating from "../../ui/StarRating";
import { calcArrObjValAvg } from "../../utils/utils";
import { StyledFlexBox, StyledHeading } from "../../styles/StyledComponents";

const StyledCommentSection = styled.div`
  padding-block: 1em;
  border-top: black 2px solid;
  max-height: 70vh;
  overflow-y: auto;
`;

const StyledComment = styled.div`
  padding-block-end: 0.3em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 15px;
  background-color: var(--color-grey-100);
  font-size: 1.5rem;
  overflow: hidden;

  & ${StyledFlexBox} {
    padding-inline: 1em;
    background-color: var(--color-sky-500);
  }

  & p {
    padding-inline: 1em;
  }
`;

export default function CommentList({ comments }) {
  const avgRating = calcArrObjValAvg(comments, "rating");

  return (
    <StyledCommentSection>
      <h2>
        {comments.length > 0
          ? `${comments.length} user reviews`
          : "No reviews yet"}
      </h2>
      <StyledFlexBox $items="center">
        <StyledHeading as="h4">Average rating: {avgRating}</StyledHeading>
        <StarRating readOnly={true} value={parseInt(avgRating)} />{" "}
      </StyledFlexBox>
      <StyledFlexBox $direction="column" $gap="2em">
        {comments.map((comment) => (
          <StyledComment key={comment.id}>
            <StyledFlexBox $justify="space-between" $items="center">
              <span>User: {comment.id}</span>
              <StarRating readOnly={true} value={parseInt(comment.rating)} />
            </StyledFlexBox>
            <p>{comment.comment}</p>
          </StyledComment>
        ))}
      </StyledFlexBox>
    </StyledCommentSection>
  );
}
