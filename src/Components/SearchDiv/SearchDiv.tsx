import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[.25rem] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[.5rem] gap-[.6rem] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[1.5rem] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className="text-[1.8rem] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[1.5rem] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Companies Here..."
            />
            <AiOutlineCloseCircle className="text-[1.8rem] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[1.5rem] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Location Here..."
            />
            <AiOutlineCloseCircle className="text-[1.8rem] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <button className="bg-blueColor h-full p-5 px-10 rounded-[.7rem] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
            <select name="" id="relevance"></select>
        </div>
      </div>
    </div>
  );
};
