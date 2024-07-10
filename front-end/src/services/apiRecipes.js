import { PAGE_SIZE } from "../utils/constants";
import { formatParams } from "../utils/utils";
import { urlport } from "./config";

export async function prefetchRecipes() {
  try {
    const res = await fetch(
      `${urlport}/recipes?_expand=difficulty&_expand=cuisine&_expand=diet`
    );
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not prefetch recipes`
      );
    }
    const data = await res.json();
    console.log("data returned", data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getRecipes(page = 1, pageSize = PAGE_SIZE) {
  try {
    const res = await fetch(
      `${urlport}/recipes?_expand=difficulty&_expand=cuisine&_expand=diet&_page=${page}&_limit=${pageSize}`
    );
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not fetch recipes`
      );
    }
    const data = await res.json();
    console.log("data returned", data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getFilterRecipes(params, page = 1, pageSize = PAGE_SIZE) {
  if (params === "all" || !params) return getRecipes(page, pageSize);

  const queryParams = formatParams(params);
  // console.log(queryParams);
  try {
    const res = await fetch(
      `${urlport}/recipes?${queryParams}&_expand=difficulty&_expand=cuisine&_expand=diet&_page=${page}&_limit=${pageSize}`
    );
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not filter recipes`
      );
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getRecipe(id) {
  try {
    const res = await fetch(`${urlport}/recipes/${id}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}. Could not get recipe`);
    }
    const data = await res.json();
    return data;
    // const comments = await getRecipeComments(data.id);
    // return{ ...data, comments };
  } catch (err) {
    console.error(err.message);
  }
}

export async function addRecipe(data) {
  try {
    const res = await fetch(`${urlport}/recipes`, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}. Could not add recipe`);
    }
    const result = await res.json();
    console.log("Success:", result);
  } catch (err) {
    console.error(err.message);
  }
}

export async function updateRecipe(id, data) {
  try {
    const res = await fetch(`${urlport}/comments/${id}`, {
      method: "PUT",
      body: data,
    });
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not update recipe`
      );
    }
    const result = await res.json();
    return { status: res.status, result };
  } catch (err) {
    console.error(err.message);
  }
}

export async function deleteRecipe(id) {
  try {
    const res = await fetch(`${urlport}/recipes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not delete recipe`
      );
    }
    const result = await res.json();
    return { status: res.status, result };
  } catch (err) {
    console.error(err.message);
  }
}

// export async function filterRecipes(params) {
//   const searchParams = new URLSearchParams();
//   for (let param in params) {
//     params[param] && searchParams.append(param, params[param]);
//   }

//   try {
//     const res = await fetch(
//       `${urlport}/recipes?${params && searchParams.toString()}`
//     );
//     if (!res.ok) {
//       throw new Error(`Response status: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.err(err.message);
//   }
// }
