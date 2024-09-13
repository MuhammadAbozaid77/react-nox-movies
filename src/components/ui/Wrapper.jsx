export default function Wrapper({ children, classesName }) {
  return (
    <>
      <div className={` xl:px-20 lg:px-12 md:px-8 px-4 ${classesName}`}>
        {children}
      </div>
    </>
  );
}
