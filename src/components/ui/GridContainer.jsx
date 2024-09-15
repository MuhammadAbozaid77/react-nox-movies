export default function GridContainer({ children }) {
  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {children}
      </div>
    </>
  );
}
