import { useQuery } from "@tanstack/react-query";
import MovieCards from "../../components/cards/MovieCards";
import GridContainer from "../../components/ui/GridContainer";
import { getPopularMovies } from "../../services/moviesAPI";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Pagination from "../../components/ui/Pagination";
import { useSearchParams } from "react-router-dom";

export default function PopularMovies() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams", searchParams);

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: popularMoviesList,
  } = useQuery({
    queryKey: ["popularMoviesList"],
    queryFn: getPopularMovies,
  });

  // ------------- Return --------------------
  if (isLoading) return <SpinnerLoading />;
  return (
    <>
      <GridContainer>
        {popularMoviesList?.length > 0 &&
          popularMoviesList?.map((el) => <MovieCards item={el} key={el?.id} />)}
      </GridContainer>
      <Pagination />
    </>
  );
}
