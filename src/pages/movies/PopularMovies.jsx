import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUxZDFiYzMzZTgxNzc1MGNjNGFlYmE2MTkyZTlmMCIsIm5iZiI6MTcyNjI0Mjc1MS44ODg1OTEsInN1YiI6IjYzNzg4YzE4YzJmNDRiMDBjMzU1MjhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvL8v2w7zbfwr-DVB7gFLN6UXx08p4XUNCym3IrN6cs",
  },
};
const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export default function PopularMovies() {
  const [propularList, setPropularList] = useState([]);
  useEffect(() => {
    async function getPopularMovies() {
      const data = await fetch(url, options);
      const zzz = await data?.json();
      console.log("zzz", zzz);
      setPropularList(zzz?.results);
    }

    getPopularMovies();
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {propularList?.length > 0 &&
          propularList?.map((el) => (
            <div key={el?.id}>
              <div className="col-span-1 text-white rounded-md overflow-hidden  relative border border-gray-800">
                <img
                  className="hover:scale-105 duration-300 transition-all"
                  src={`https://image.tmdb.org/t/p/original${el?.poster_path}`}
                  alt=""
                />
                {/* <div className="hover:bg-black/40 absolute inset-0"></div> */}
              </div>
              <h1 className="text-gray-200 mt-1 text-[20px]"> {el?.original_title} </h1>
              <h1 className="text-gray-500"> {el?.vote_average} </h1>
            </div>
          ))}
      </div>
    </>
  );
}
