export function formatParams(params) {
  //params = object with filters
  const queryParams = new URLSearchParams();
  for (let param in params) {
    queryParams.append(param, params[param]);
  }
  return queryParams.toString();
}
