import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import movie from "./../../assets/movie.jpg";

export default function HomeSlider() {
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
  return (
    <>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        <div className="rounded-[15px] m-1 overflow-hidden">
          <div className="flex justify-center items-center hover:scale-105 duration-150 transition-all">
            <img className="object-cover " src={movie} alt="" />
          </div>
        </div>
      </Carousel>
    </>
  );
}
