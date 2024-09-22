export default function MovieDetailsLeft({ pic }) {
  return (
    <>
      <div className=" col-span-1 overflow-hidden rounded-xl relative">
        <img
          src={`https://image.tmdb.org/t/p/original${pic}`}
          alt={`https://image.tmdb.org/t/p/original${pic}`}
          className="  hover:scale-110  transition-all duration-200 h-[100%]"
        />
      </div>
    </>
  );
}
