import { Link } from "react-router-dom";

export default function LinksTab({ tabLinks }) {
  return (
    <>
      <div className="my-8 rounded-lg bg-gray-700  flex justify-start items-center p-2 gap-4">
        {tabLinks?.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className="text-gray-300 bg-gray-900 min-w-[80px] p-2 rounded-md text-center font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
