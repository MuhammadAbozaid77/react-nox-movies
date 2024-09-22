import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "../components/ui/PageNotFound";
import Home from "../pages/home/Home";
// ------------------------------TV---------------------------
import Movies from "../pages/movies/Movies";
import MovieDetails from "../pages/movies/MovieDetails";
// ------------------------------TV---------------------------
import TvShow from "../pages/tvShow/TvShow";
import TvDetails from "../pages/tvShow/TvDetails";
import MovieVideos from "../pages/movies/MovieVideos";
import MovieDetailsLayout from "../pages/movies/MovieDetailsLayout";
// import TvDetails from "../pages/tvShow/TvDetails";

export default function Navigations() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route path="" element={<MovieDetailsLayout />}>
          <Route
            index
            element={<Navigate replace to="/movieDetails/:movieId" />}
          />

          <Route
            index
            path="movieDetails/:movieId"
            element={<MovieDetails />}
          />
          <Route path="movieVideos/:movieId" element={<MovieVideos />} />
        </Route>

        <Route path="tvShow" element={<TvShow />} />
        <Route path="tvDetails/:tvId" element={<TvDetails />} />
      </Route>
      <Route />
    </Routes>
  );
}
