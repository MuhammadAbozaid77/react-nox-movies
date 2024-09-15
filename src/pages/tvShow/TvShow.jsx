import { Outlet } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import LinksTab from "../../components/ui/LinksTab";
const tvShowLinks = [
  {
    name: "TopRated",
    url: "/tvShow/topRated",
  },
  {
    name: "Popular",
    url: "/tvShow/popularTvShow",
  },
  {
    name: "UpComing",
    url: "/tvShow/upComingTvShow",
  },
];
export default function TvShow() {
  return (
    <Wrapper>
      <LinksTab tabLinks={tvShowLinks} />
      <Outlet />
    </Wrapper>
  );
}
