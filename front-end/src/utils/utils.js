export function formatParams(params) {
  //params = object with filters
  const queryParams = new URLSearchParams();
  for (let param in params) {
    queryParams.append(param, params[param]);
  }
  return queryParams.toString();
}

export function calcArrObjValAvg(arr, property) {
  let avg = 0;
  for (let el of arr) {
    avg += el[property];
  }
  avg /= arr.length;
  return avg.toFixed(1);
}

export function calcPageItems(page, pageSize) {
  let tot = 0;
  tot = page * pageSize;
  return tot;
}
