import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoviesVideos } from "../../services/moviesAPI";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function MovieVideos() {
  const params = useParams();
  const movieId = params?.movieId;

  const [videoLoading, setVideoLoading] = useState(false);
  const { data: tvShowVideo, isLoading } = useQuery({
    queryKey: ["tvShowVideo", movieId],
    queryFn: () => getMoviesVideos(movieId),
    enabled: !!movieId,
  });

  const [videoShow, setVideoShow] = useState(tvShowVideo?.[0]?.key);
  const handelChangeVideo = (arg) => {
    setVideoLoading(true);
    setTimeout(() => {
      setVideoShow(arg);
    }, 2000);
    setVideoLoading(false);
  };

  if (isLoading) return <SpinnerLoading />;

  if (tvShowVideo?.length === 0)
    return (
      <div className="relative flex justify-center items-center h-[400px] ">
        <div className="text-white flex flex-col justify-center items-center">
          <MdOutlineSlowMotionVideo size={200} color="white" />{" "}
          <span className="text-[30px] text-yellow-500 font-semibold">
            No Videos To Show
          </span>
        </div>
      </div>
    );

  return (
    <div className="relative">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2">
          <ul className="flex flex-col justify-center items-start gap-1">
            {tvShowVideo?.length > 0 &&
              tvShowVideo?.map((el) => (
                <li
                  className={
                    "border bg-gray-700 p-2 w-[100%] text-gray-300 border-gray-500 rounded-md flex items-center gap-2 cursor-pointer"
                  }
                  onClick={() => handelChangeVideo(el?.key)}
                  key={el?.id}
                >
                  <span>
                    <FaPlay className="text-yellow-500" size={20} />
                  </span>
                  <span>{el?.name}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-6">
          {videoLoading ? (
            <SpinnerLoading />
          ) : (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${videoShow}`}
              title={videoShow}
              className=" border-[2px] border-gray-500 mb-2 rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
