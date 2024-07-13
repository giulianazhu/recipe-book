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
  return typeof avg === "number" && !isNaN(avg) ? avg.toFixed(1) : 0;
}

export function calcPageItems(page, pageSize) {
  let tot = 0;
  tot = page * pageSize;
  return tot;
}

export function filterByProperties(data, filtersObj) {
  let filteredData = data.filter((recipe) => {
    return Object.keys(filtersObj).every((filterKey) => {
      return recipe[filterKey] === filtersObj[filterKey];
    });
  });
  return filteredData;
}

export function scrollTop() {
  window.scrollTo({ top: 0, behaviour: "smooth" });
}

export function isEmptyObj(obj) {
  return Object.values(obj).length === 0;
}
