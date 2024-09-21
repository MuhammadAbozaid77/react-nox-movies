import { Link } from "react-router-dom";

export default function StarCard({ item }) {
  console.log(item);

  return (
    <>
      <Link to={`/movies/movieDetails/${item?.id}`} className="cursor-pointer">
        <div className="col-span-1 text-white rounded-md overflow-hidden  relative">
          <img
            className="hover:scale-110 duration-300 transition-all"
            src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
            alt=""
          />
          {/* <div className="hover:bg-black/40 absolute inset-0"></div> */}
        </div>
        <h1 className="text-yellow-500 font-semibold mt-1 mb-5 text-center ">{item?.name}</h1>
        {/* <h1 className="text-gray-500 "> {item?.popularity} </h1> */}
      </Link>
    </>
  );
}
