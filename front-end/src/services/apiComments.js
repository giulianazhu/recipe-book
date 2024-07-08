import { urlport } from "./config";

//not needed
export async function getComments() {
  try {
    const res = await fetch(`${urlport}/comments`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    console.log(data[0]);
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
    console.log(data);
    console.log(data[0]);
  } catch (err) {
    console.err(err.message);
  }
}

export async function addComment(data) {
  try {
    const res = await fetch(`${urlport}/comments`, {
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
    console.log("Success:", result);
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
    console.log("Success:", result);
  } catch (err) {
    console.err(err.message);
  }
}
