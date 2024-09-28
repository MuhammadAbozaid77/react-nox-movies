import { FaLanguage } from "react-icons/fa6";
import { FaGrinStars, FaStar } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

export default function MovieDetailsRight({ iconsData }) {
  const { language, rating, vote, status, release, time } = iconsData;

  const hours = Math.floor(time / 60); // Get the whole hours
  const remainingtime = time % 60;

  const iconsRight = [
    {
      icon: <FaLanguage />,
      name: "language",
      data: language?.[0]?.name,
    },
    {
      icon: <BsFillCalendarDateFill />,
      name: "release date",
      data: release,
    },
    {
      icon: <BiSolidTimeFive />,
      name: "time",
      data: `${hours} hours  and ${remainingtime} minutes`,
    },
    {
      icon: <FaStar />,
      name: "rating",
      data: rating,
    },
    {
      icon: <IoIosPeople />,
      name: "vote",
      data: vote,
    },
    {
      icon: <FaGrinStars />,
      name: "status",
      data: status,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 rounded-xl gap-1">
        {iconsRight?.map((el, index) => (
          <div className="flex justify-start items-center" key={index}>
            <span className="px-1 text-[20px] cursor-pointer text-yellow-500 font-semibold  capitalize">
              {el?.icon}
            </span>
            <span className="px-1  cursor-pointer text-yellow-500 font-semibold  capitalize">
              {el?.name} :
            </span>
            <span className="px-1  cursor-pointer text-gray-400  font-semibold  capitalize">
              {el?.data}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
