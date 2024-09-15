import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../services/moviesAPI";
import { useQuery } from "@tanstack/react-query";
import MovieDetailsLeft from "./mapCards/MovieDetailsLeft";
import MovieDetailsCenter from "./mapCards/MovieDetailsCenter";
import MovieDetailsRight from "./mapCards/MovieDetailsRight";
import Wrapper from "../../components/ui/Wrapper";
import SpinnerLoading from "../../components/ui/SpinnerLoading";

// getMovieDetails
export default function MovieDetails() {
  const params = useParams();
  const movieId = params?.movieId;

  // ------------- Fetching Data --------------------
  const {
    isLoading,
    error,
    data: movieDetails,
  } = useQuery({
    queryKey: ["popularMoviesList", movieId],
    queryFn: () => getMovieDetails(movieId),
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

  if (isLoading) return <SpinnerLoading />;

  return (
    <div
      className="relative py-[10px] h-[calc(100vh-80px)]"
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
          <MovieDetailsRight />
        </div>
      </Wrapper>
    </div>
  );
}
