// movies
import Wrapper from "../../components/ui/Wrapper";
import LinksTab from "../../components/ui/LinksTab";
import { Outlet } from "react-router-dom";
const moviesLinks = [
  {
    name: "Popular",
    url: "/movies/popular",
  },
  {
    name: "List",
    url: "/movies/lists",
  },
  {
    name: "UpComing",
    url: "/movies/upComing",
  },
];
export default function Movies() {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Outlet />
    </div>
  );
}

// <div className="h-[calc(100vh-80px)]">
// <Wrapper classesName={"mb-16"}>
{
  /* <LinksTab tabLinks={moviesLinks} /> */
}
// </Wrapper>
// </div>
