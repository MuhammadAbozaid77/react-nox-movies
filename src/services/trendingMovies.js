import { options } from "./movieDbConfig";

export async function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  try {
    const res = await fetch(url, options);
    const data = await res?.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Popular Movies");
  }
}
export async function getTrendingTvShow() {
  const url = "https://api.themoviedb.org/3/trending/tv/week?language=en-US";
  try {
    const res = await fetch(url, options);
    const data = await res?.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Popular Movies");
  }
}
export async function getTrendingPeople() {
  const url =
    "https://api.themoviedb.org/3/trending/person/week?language=en-US";
  try {
    const res = await fetch(url, options);
    const data = await res?.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Popular Movies");
  }
}
