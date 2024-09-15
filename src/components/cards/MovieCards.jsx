export default function MovieCards({ item }) {
  return (
    <>
      <div>
        <div className="col-span-1 text-white rounded-md overflow-hidden  relative">
          <img
            className="hover:scale-105 duration-300 transition-all"
            src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
            alt=""
          />
          {/* <div className="hover:bg-black/40 absolute inset-0"></div> */}
        </div>
        <h1 className="text-white mt-1 ">{item?.original_title}</h1>
        <h1 className="text-gray-500 "> {item?.vote_average} </h1>
      </div>
    </>
  );
}
