import { useQuery } from "@tanstack/react-query";
import { getTrendingPeople } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import { FaChevronRight } from "react-icons/fa6";
import GridContainer from "../../components/ui/GridContainer";
import MovieCards from "../../components/cards/MovieCards";
import StarCard from "../../components/cards/StarCard";

export default function TrendingPeople() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingPeopleList"],
    queryFn: getTrendingPeople,
  });

  console.log(data);

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[80px]">
      <div className="mb-4">
        <h1 className="text-[22px] text-gray-300 flex justify-start items-center">
          <span className=""> Trending People </span>
          <span className="flex justify-center items-center mx-2">
            <FaChevronRight className="text-bold" />
          </span>
        </h1>
      </div>
      <GridContainer>
        {data?.map((el, index) => (
          <StarCard key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
