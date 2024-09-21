import Wrapper from "../../components/ui/Wrapper";
import TrendingMovies from "./TrendingMovies";
import TrendingTvShow from "./TrendingTvShow";
import TrendingPeople from "./TrendingPeople";
import HomeSlider from "./HomeSlider";

export default function Home() {
  return (
    <>
      <Wrapper classesName={"text-gray-200 py-8"}>
        <HomeSlider />
        <TrendingMovies />
        <TrendingTvShow />
        <TrendingPeople />
      </Wrapper>
    </>
  );
}
