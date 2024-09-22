import MovieDetailsLeft from "./components/MovieDetailsLeft";
import MovieDetailsCenter from "./components/MovieDetailsCenter";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

// getMovieDetails
export default function MovieDetails() {
  const params = useParams();
  const movieId = params?.movieId;
  const queryClient = useQueryClient();
  const movieDetails = queryClient.getQueryData(["movieDetails", movieId]);

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

  return (
    <>
      <div className="relative text-white gap-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4">
        <MovieDetailsLeft pic={movieDetails?.poster_path} />
        <MovieDetailsCenter
          centerDetails={centerDetails}
          iconsData={iconsData}
          movieId={movieDetails?.id}
        />
      </div>
    </>
  );
}
