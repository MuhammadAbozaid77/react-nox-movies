import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import HomeSlider from "../../components/features/HomeSlider";
import { FaChevronRight } from "react-icons/fa6";


export default function TrendingMovies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingMoviesList"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[80px]">
      <div className="mb-4">
        <h1 className="text-[22px] text-gray-300 flex justify-start items-center">
          <span className=""> Trending Movies </span>
          <span className="flex justify-center items-center mx-2">
            <FaChevronRight className="text-bold" />
          </span>
        </h1>
      </div>
      {/* <HomeSlider data={data} isLoading={isLoading} error={error} /> */}
      <HomeSlider data={data} isLoading={isLoading} error={error} />

    </div>
  );
}
