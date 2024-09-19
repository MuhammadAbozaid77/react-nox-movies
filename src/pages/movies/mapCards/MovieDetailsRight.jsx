import { FaLanguage } from "react-icons/fa6";
import { FaGrinStars, FaStar } from "react-icons/fa";
import { BiLogoInternetExplorer, BiSolidTimeFive } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { RiUserFollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MovieDetailsRight({ iconsData }) {
  const { language, rating, vote, status, release, time, link } = iconsData;

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
      data: time,
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
      icon: <BiLogoInternetExplorer />,
      name: "website",
      data: "",
    },
    {
      icon: <FaGrinStars />,
      name: "status",
      data: status,
    },
  ];

  return (
    <>
      <div className="p-2 lg:col-span-1 md:col-span-3 col-span-1 rounded-xl flex flex-col justify-between gap-1">
        {iconsRight?.map((el, index) => (
          <div
            className="flex justify-start items-center py-2 bg-[#303030] border border-gray-500 rounded-md"
            key={index}
          >
            <span className=" text-yellow-500  w-[30px] h-[30px] text-[20px] border-gray-500  flex justify-center items-center">
              {el?.icon}
            </span>
            <span className="px-1  cursor-pointer text-yellow-500  capitalize">
              {el?.name} :
            </span>
            <span className="px-1  cursor-pointer text-gray-300 font-semibold  capitalize">
              {el?.data}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
{
  /* <Link className='flex items-center' target='_blank' to={movieDetails.homepage}> 
                          <span className='mx-1'> Here </span>
                          <span>  <BsFillArrowUpRightCircleFill size={20}/> </span>
                          </Link>  */
}
