import { urlport } from "./config";

//not needed
export async function getComments() {
  try {
    const res = await fetch(`${urlport}/comments`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function getRecipeComments(recipeId) {
  try {
    const res = await fetch(`${urlport}/comments?recipeId=${recipeId}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function addComment(recipeId, data) {
  try {
    console.log("addCommmentAPI", data); //undefined dk why
    const res = await fetch(`${urlport}/recipes/${recipeId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    console.log("Success:", result);
  } catch (err) {
    console.error(err.message);
  }
}

export async function updateComment(id, data) {
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

export async function deleteComment(id) {
  try {
    const res = await fetch(`${urlport}/comments/${id}`, {
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
