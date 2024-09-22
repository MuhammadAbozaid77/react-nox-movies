import { useQuery } from "@tanstack/react-query";
import { getAllTrending } from "../../services/trendingMovies";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Slider from "../../components/features/Slider";

export default function HomeSlider() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["allTrending"],
    queryFn: getAllTrending,
  });

  if (isLoading) return <SpinnerLoading />;

  return (
    <div className="mt-[40px]">
      <Slider data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
