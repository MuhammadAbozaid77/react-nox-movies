import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoviesVideos } from "../../services/moviesAPI";

export default function MovieVideos() {
  const params = useParams();
  const movieId = params?.movieId;

  const { data: tvShowVideo } = useQuery({
    queryKey: ["tvShowVideo", movieId],
    queryFn: () => getMoviesVideos(movieId),
    enabled: !!movieId,
  });
  console.log("tvShowVideo", tvShowVideo);




  return <></>;
}
