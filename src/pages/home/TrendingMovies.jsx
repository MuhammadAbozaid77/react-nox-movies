import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import GridContainer from "../../components/ui/GridContainer";
import { CiSquareMore } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";
import MovieCards from "../../components/cards/MovieCards";
import { Link } from "react-router-dom";

export default function TrendingMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingMoviesList"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[40px]">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-[22px] text-gray-300 flex justify-start items-center">
          <span className="flex justify-center items-center mx-2">
            <RiMovie2Line className=" text-yellow-500" size={30} />
          </span>
          <span className=""> Trending Movies </span>
        </h1>
        <Link
          to={"/movies"}
          className="flex justify-center items-center cursor-pointer"
        >
          <span className="mx-1 text-gray-400 font-semibold"> More </span>
          <span>
            <CiSquareMore size={25} className="text-yellow-500" />
          </span>
        </Link>
      </div>

      <GridContainer>
        {data?.slice(0, 5).map((el, index) => (
          <MovieCards key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
