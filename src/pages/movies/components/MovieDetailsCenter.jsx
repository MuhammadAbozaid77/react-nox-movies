import { TbPlayerPlayFilled } from "react-icons/tb";
import MovieDetailsRight from "./MovieDetailsRight";
import { Link } from "react-router-dom";

export default function MovieDetailsCenter({
  centerDetails,
  iconsData,
  movieId,
}) {
  const { title, overview, genres, companies, tagline } = centerDetails;
  return (
    <>
      <div className=" md:col-span-3 col-span-1 flex flex-col gap-4 px-5">
        <div className=" rounded-b-[10px]">
          <h2 className="text-[25px] text-yellow-500 font-semibold">{title}</h2>
          <h4 className="text-[14px] text-gray-300 capitalize">{tagline}</h4>
        </div>
        <div>
          <span className="text-yellow-500 font-bold"> Overview </span>
          <p className="text-gray-300 text-[14px] leading-5 "> {overview} </p>
        </div>
        <div>
          <span className="text-yellow-500 font-bold capitalize"> Genres </span>
          <div className="flex justify-start items-center flex-wrap gap-2">
            {genres?.map((el) => (
              <span
                key={el?.id}
                className="p-1 bg-[#303030]  text-gray-200 min-w-[80px] rounded-md text-center text-[14px]"
              >
                {el?.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center gap-2">
            {companies?.map((el) => (
              <div
                className="w-[60px] h-[60px] bg-gray-200 relative overflow-hidden p-2 rounded flex-wrap"
                key={el?.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${el?.logo_path}`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-yellow-500 font-bold capitalize">Details</span>
          <MovieDetailsRight iconsData={iconsData} />
        </div>

        <Link to={`/movieVideos/${movieId}`} className="mt-4">
          <button className="border  px-8 rounded-full h-[60px] flex justify-center items-center gap-2 bg-gray-200">
            <span>
              <TbPlayerPlayFilled size={30} className="text-gray-600" />
            </span>
            <span className="text-[20px] text-gray-600 font-semibold">
              Watch Now
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}
