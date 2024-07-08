import { getRecipeComments } from "./apiComments";
import { urlport } from "./config";

export async function getRecipes() {
  try {
    const res = await fetch(`${urlport}/recipes`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
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
