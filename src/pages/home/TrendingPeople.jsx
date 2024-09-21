import { useQuery } from "@tanstack/react-query";
import { getTrendingPeople } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import GridContainer from "../../components/ui/GridContainer";
import StarCard from "../../components/cards/StarCard";
import { CiSquareMore } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";

export default function TrendingPeople() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trendingPeopleList"],
    queryFn: getTrendingPeople,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[40px]">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-[22px] text-gray-300 flex justify-start items-center">
          <span className="flex justify-center items-center mx-2">
            <FaUsers className=" text-yellow-500" size={30} />
          </span>
          <span className=""> Trending Stars </span>
        </h1>
        <div className="flex justify-center items-center cursor-pointer">
          <span className="mx-1 text-gray-400 font-semibold"> More </span>
          <span>
            <CiSquareMore size={25} className="text-yellow-500" />
          </span>
        </div>
      </div>

      <GridContainer>
        {data?.slice(0, 5).map((el, index) => (
          <StarCard key={index} item={el} />
        ))}
      </GridContainer>
    </div>
  );
}
