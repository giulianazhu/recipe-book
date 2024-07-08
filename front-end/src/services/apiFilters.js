import { urlport } from "./config";

export async function getCuisines() {
  try {
    const res = await fetch(`${urlport}/cuisines`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function getDiets() {
  try {
    const res = await fetch(`${urlport}/diets`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err.message);
  }
}

export async function getDifficulties() {
  try {
    const res = await fetch(`${urlport}/difficulties`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err.message);
  }
}
