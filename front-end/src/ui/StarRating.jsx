import Rating from "@mui/material/Rating";

export default function StarRating({
  disabled = false,
  name = "rating",
  handleRating,
  value = 0,
}) {
  return (
    <div>
      <Rating
        disabled={disabled}
        name={name}
        defaultValue={value}
        onChange={(e) => handleRating(parseInt(e.target.value))}
      />
    </div>
  );
}
