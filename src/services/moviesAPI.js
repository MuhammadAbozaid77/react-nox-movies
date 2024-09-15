const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUxZDFiYzMzZTgxNzc1MGNjNGFlYmE2MTkyZTlmMCIsIm5iZiI6MTcyNjM0NzI3Mi45NDA5NjUsInN1YiI6IjYzNzg4YzE4YzJmNDRiMDBjMzU1MjhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zub3g_YOXe5Z52RgTI4nGSBx36BHoplESOzYYI4wUzY",
  },
};

export async function getPopularMovies() {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Movies ", error);
  }
}
