import { urlport } from "./config";

export async function getCuisines() {
  try {
    const res = await fetch(`${urlport}/cuisines`);
    // const res = await fetch(`${urlport}/cuisinesdfsfdfsdds`);
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not fetch cuisines data`
      );
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getDiets() {
  try {
    const res = await fetch(`${urlport}/diets`);
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not fetch diets data`
      );
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getDifficulties() {
  try {
    const res = await fetch(`${urlport}/difficulties`);
    if (!res.ok) {
      throw new Error(
        `Response status: ${res.status}. Could not fetch difficulties data`
      );
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
