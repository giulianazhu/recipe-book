import Rating from "@mui/material/Rating";

export default function StarRating({
  disabled = false,
  readOnly = false,
  name = "rating",
  isPending,
  onChange,
  value,
}) {
  return (
    <Rating
      name={name}
      disabled={disabled || isPending}
      readOnly={readOnly}
      onChange={onChange}
      value={parseInt(value)}
    />
  );
}
