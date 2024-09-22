import { useParams } from "react-router-dom";
import { getTvDetails } from "../../services/tvShowAPI";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../components/ui/Wrapper";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import TvDetailsCenter from "./components/TvDetailsCenter";
import TvDetailsLeft from "./components/TvDetailsLeft";
import TvDetailsRight from "./components/TvDetailsRight";

// gettvShowDetails
export default function TvDetails() {
  const params = useParams();
  const tvId = params?.tvId;

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: tvShowDetails,
  } = useQuery({
    queryKey: ["tvShowDetails", tvId],
    queryFn: () => getTvDetails(tvId),
    enabled: !!tvId,
  });

  const imagePath = `https://image.tmdb.org/t/p/original${tvShowDetails?.poster_path}`;
  const centerDetails = {
    title: tvShowDetails?.original_name,
    overview: tvShowDetails?.overview,
    genres: tvShowDetails?.genres,
    companies: tvShowDetails?.production_companies,
    tagline: tvShowDetails?.tagline,
  };
  const iconsData = {
    language: tvShowDetails?.spoken_languages,
    rating: tvShowDetails?.vote_average,
    vote: tvShowDetails?.vote_count,
    status: tvShowDetails?.status,
    release: tvShowDetails?.release_date,
    time: tvShowDetails?.runtime,
    link: tvShowDetails?.homepage,
  };
  console.log("tvShowDetails", tvShowDetails);

  if (isLoading) return <SpinnerLoading />;

  return (
    <div
      className="relative py-[10px] min-h-[calc(100vh-80px)]"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content above the overlay */}
      <Wrapper>
        <div className="relative text-white gap-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          <TvDetailsLeft pic={tvShowDetails?.poster_path} />
          <TvDetailsCenter centerDetails={centerDetails} />
          <TvDetailsRight iconsData={iconsData} />
        </div>
      </Wrapper>
    </div>
  );
}
