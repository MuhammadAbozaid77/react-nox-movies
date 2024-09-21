import { useQuery } from "@tanstack/react-query";
import { getTrendingTvShow } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import MovieCards from "../../components/cards/MovieCards";
import GridContainer from "../../components/ui/GridContainer";
import { FaChevronRight } from "react-icons/fa6";
import TvCards from "../../components/cards/TvCards";

export default function TrendingTvShow() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingTvShowList"],
    queryFn: getTrendingTvShow,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[80px]">
      <div className="mb-4">
        <h1 className="text-[22px] text-gray-300 flex justify-start items-center">
          <span className=""> Trending TV </span>
          <span className="flex justify-center items-center mx-2">
            <FaChevronRight className="text-bold" />
          </span>
        </h1>
      </div>

      <GridContainer>
        {data?.map((el, index) => (
          <TvCards key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
