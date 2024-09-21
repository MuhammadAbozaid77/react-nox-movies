import { options } from "./movieDbConfig";

export async function getTvDetails(tvId) {
  const url = `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Can't Get Movie Details ", error);
  }
}
