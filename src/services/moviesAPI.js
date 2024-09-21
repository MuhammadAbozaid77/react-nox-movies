import { options } from "./movieDbConfig";

export async function getPopularMovies(currentPage) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`;

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Movies ", error);
  }
}
export async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Can't Get Movie Details ", error);
  }
}

export async function getNowPlaingMovies() {
  const nowPlaingMovies =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  try {
    const res = await fetch(nowPlaingMovies, options);
    const data = await res?.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Popular Movies");
  }
}
