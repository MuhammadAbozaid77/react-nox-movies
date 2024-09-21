import { useParams } from "react-router-dom";

import { getTvDetails } from "../../services/tvShowAPI";
import { useQuery } from "@tanstack/react-query";
import MovieDetailsLeft from "./mapCards/MovieDetailsLeft";
import MovieDetailsCenter from "./mapCards/MovieDetailsCenter";
import MovieDetailsRight from "./mapCards/MovieDetailsRight";
import Wrapper from "../../components/ui/Wrapper";
import SpinnerLoading from "../../components/ui/SpinnerLoading";

// getMovieDetails
export default function TvDetails() {
  const params = useParams();
  const movieId = params?.movieId;

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: movieDetails,
  } = useQuery({
    queryKey: ["popularMoviesList", movieId],
    queryFn: () => getTvDetails(movieId),
    enabled: !!movieId,
  });

  const imagePath = `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`;
  const centerDetails = {
    title: movieDetails?.original_title,
    overview: movieDetails?.overview,
    genres: movieDetails?.genres,
    companies: movieDetails?.production_companies,
    tagline: movieDetails?.tagline,
  };
  const iconsData = {
    language: movieDetails?.spoken_languages,
    rating: movieDetails?.vote_average,
    vote: movieDetails?.vote_count,
    status: movieDetails?.status,
    release: movieDetails?.release_date,
    time: movieDetails?.runtime,
    link: movieDetails?.homepage,
  };
  console.log("movieDetails", movieDetails);

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
          <MovieDetailsLeft pic={movieDetails?.poster_path} />
          <MovieDetailsCenter centerDetails={centerDetails} />
          <MovieDetailsRight iconsData={iconsData} />
        </div>
      </Wrapper>
    </div>
  );
}
