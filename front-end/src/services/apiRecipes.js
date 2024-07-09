import { formatParams } from "../utils/utils";
import { urlport } from "./config";

export async function getRecipes() {
  try {
    const res = await fetch(
      `${urlport}/recipes?_expand=difficulty&_expand=cuisine&_expand=diet`
    );
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    console.log("data returned", data);
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function getFilterRecipes(params) {
  if (params === "all" || !params) return getRecipes();

  const queryParams = formatParams(params);
  // console.log(queryParams);
  try {
    const res = await fetch(
      `${urlport}/recipes?${queryParams}&_expand=difficulty&_expand=cuisine&_expand=diet`
    );
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function getRecipe(id) {
  try {
    const res = await fetch(`${urlport}/recipes/${id}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
    // const comments = await getRecipeComments(data.id);
    // return{ ...data, comments };
  } catch (err) {
    console.err(err.message);
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

export async function addRecipe(data) {
  try {
    const res = await fetch(`${urlport}/recipes`, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    console.log("Success:", result);
  } catch (err) {
    console.err(err.message);
  }
}

export async function updateRecipe(id, data) {
  try {
    const res = await fetch(`${urlport}/comments/${id}`, {
      method: "PUT",
      body: data,
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    return { status: res.status, result };
  } catch (err) {
    console.err(err.message);
  }
}

export async function deleteRecipe(id) {
  try {
    const res = await fetch(`${urlport}/recipes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    return { status: res.status, result };
  } catch (err) {
    console.err(err.message);
  }
}
