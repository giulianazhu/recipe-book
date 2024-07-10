import StarRating from "../../ui/StarRating";
import { calcArrObjValAvg } from "../../utils/utils";

export default function CommentList({ comments }) {
  const avgRating = calcArrObjValAvg(comments, "rating");
  console.log(avgRating);

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
    </div>
  );
}
