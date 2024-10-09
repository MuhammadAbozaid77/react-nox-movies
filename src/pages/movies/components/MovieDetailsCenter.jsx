import { TbPlayerPlayFilled } from "react-icons/tb";
import MovieDetailsRight from "./MovieDetailsRight";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { LuChevronsRight } from "react-icons/lu";
// import { MdSubtitles } from "react-icons/md";
import { MdSubtitles } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";

export default function MovieDetailsCenter({
  centerDetails,
  iconsData,
  movieId,
}) {
  const { title, overview, genres, companies, tagline } = centerDetails;
  return (
    <>
      <div className=" md:col-span-4 col-span-1 flex flex-col gap-8 px-5">
        <div className=" rounded-b-[10px]">
          <h2 className="text-[35px] text-white font-semibold">{title}</h2>
          <div className="flex justify-start gap-2 items-center">
            <p className="text-gray-500 font-semibold text-[16px] leading-6  rounded-md">
              {tagline}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 text-[18px] font-semibold">
              Overview
            </span>
          </div>
          <p className="text-gray-400 text-[16px] leading-6 bg-gray-800/70 rounded-md p-3">
            {overview}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[18px] me-2">
              Genres
            </span>
            <div className="flex justify-start items-center flex-wrap gap-2">
              {genres?.map((el) => (
                <span
                  key={el?.id}
                  className="p-1 bg-gray-800/70  text-gray-400 font-semibold min-w-[80px] rounded-md text-center text-[14px]"
                >
                  {el?.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[18px] me-2">
              Production companies
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            {companies?.map((el) => (
              <div
                className="w-[60px] h-[60px] bg-white relative overflow-hidden p-2 rounded flex-wrap"
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
          <div className="flex items-center gap-1 mb-2 ">
            <MdDoubleArrow className="text-yellow-600" size={35} />
            <span className="text-gray-200 font-semibold text-[18px] me-2">
              Details
            </span>
          </div>

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
