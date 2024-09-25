import { Link } from "react-router-dom";
import { FaStar, FaGooglePlay } from "react-icons/fa";

export default function MovieCards({ item }) {
  console.log(item);

  return (
    <Link to={`/movieDetails/${item?.id}`} className="cursor-pointer">
      <div className="col-span-1 text-white rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 group">
          <div className="bg-black h-[100%] w-[100%] opacity-0 group-hover:opacity-70 duration-150 transition-all"></div>

          {/* First div appearing on hover */}
          <div className="py-1 px-2 capitalize text-[12px] font-bold bg-yellow-500 text-black text-center absolute top-[20px] -left-[120px] group-hover:left-2 rounded-full transition-all duration-300">
            muhammad
          </div>

          {/* Second div appearing on hover */}
          <div className="py-1 px-2 capitalize text-[12px] font-bold bg-black/70 text-gray-200 text-center absolute top-[50px] -left-[120px] group-hover:left-2 rounded-full transition-all duration-500">
            muhammad
          </div>

          {/* Third div with icon and rating */}
          <div className="flex items-center gap-2 py-1 px-2 capitalize text-[12px] font-bold bg-black/70 text-yellow-600 text-center absolute top-[80px] -left-[120px] group-hover:left-2 rounded-full transition-all duration-500">
            <span>
              <FaStar size={20} />
            </span>
            <span>{item?.vote_average}</span>
          </div>

          {/* Rotating Icon in Center */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaGooglePlay
              className="text-gray-200 text-[40px] transition-transform duration-500 group-hover:rotate-[360deg] mt-[80px]"
              size={40}
            />
          </div>
        </div>

        <img
          className=""
          src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
          alt=""
        />
      </div>
      <h1 className="text-gray-300 mt-2">{item?.original_title}</h1>
    </Link>
  );
}
