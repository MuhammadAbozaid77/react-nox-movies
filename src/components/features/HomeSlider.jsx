import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import movie from "./../../assets/movie.jpg";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaingMovies } from "../../services/moviesAPI";
import SpinnerLoading from "../ui/SpinnerLoading";

export default function HomeSlider() {
  const {
    isLoading,
    data: nowPlaingMovies,
    error,
  } = useQuery({
    queryKey: ["nowPlaingMovies"],
    queryFn: getNowPlaingMovies,
  });
  console.log(nowPlaingMovies);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    xlmobile: {
      breakpoint: { max: 769, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) return <SpinnerLoading />;
  return (
    <>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {nowPlaingMovies?.length > 0 &&
          nowPlaingMovies?.map((el) => (
            <div className="rounded-[15px] m-1 overflow-hidden" key={el?.id}>
              <div className="flex justify-center items-center hover:scale-105 duration-150 transition-all">
                <img
                  className="object-cover "
                  src={`https://image.tmdb.org/t/p/original${el?.poster_path}`}
                  alt=""
                />
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
}
