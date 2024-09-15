export default function MovieDetailsCenter({ centerDetails }) {
  const { title, overview, genres, companies, tagline } = centerDetails;
  return (
    <>
      <div className="md:col-span-2 col-span-1 flex flex-col gap-4">
        <div className=" bg-gray-900 rounded-b-[10px] p-3 border border-gray-800">
          <h2 className="text-[20px] text-yellow-500 font-semibold">{title}</h2>
          <h4 className="text-[12px] text-gray-300 capitalize">{tagline}</h4>
        </div>
        <div>
          <span className="text-yellow-500 font-bold"> Overview </span>
          <p className="text-gray-300 text-[14px] leading-4"> {overview} </p>
        </div>
        <div>
          <span className="text-yellow-500 font-bold capitalize"> Genres </span>
          <div className="flex justify-start items-center flex-wrap gap-2">
            {genres?.map((el) => (
              <span
                key={el?.id}
                className="p-1 bg-gray-900 border border-gray-800 text-gray-200 min-w-[80px] rounded-md text-center text-[14px]"
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
      </div>
    </>
  );
}
