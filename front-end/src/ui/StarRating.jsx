import Rating from "@mui/material/Rating";

export default function StarRating({
  disabled = false,
  readOnly = false,
  name = "rating",
  isPending = false,
  onChange,
  value,
  size = "medium",
}) {
  return (
    <Rating
      name={name}
      disabled={disabled || isPending}
      readOnly={readOnly}
      onChange={onChange}
      value={parseInt(value)}
      size={size}
    />
  );
}
