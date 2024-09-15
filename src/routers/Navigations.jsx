import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "../components/ui/PageNotFound";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import PopularMovies from "../pages/movies/PopularMovies";
import ListsMovies from "../pages/movies/ListsMovies";
import UpComingMovies from "../pages/movies/UpComingMovies";
import TvShow from "../pages/tvShow/TvShow";
import PopularTvShow from "../pages/tvShow/PopularTvShow";
import TopRated from "../pages/tvShow/TopRated";
import UpComingTvShow from "../pages/tvShow/UpComingTvShow";

export default function Navigations() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<Navigate replace to="popular" />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="lists" element={<ListsMovies />} />
          <Route path="upComing" element={<UpComingMovies />} />
        </Route>
        <Route path="tvShow" element={<TvShow />}>
          <Route index element={<Navigate replace to="topRated" />} />
          <Route path="topRated" element={<TopRated />} />
          <Route path="popularTvShow" element={<PopularTvShow />} />
          <Route path="upComingTvShow" element={<UpComingTvShow />} />
        </Route>
      </Route>
      <Route />
    </Routes>
  );
}
