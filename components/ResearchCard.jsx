import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ResearchCard = ({ paper }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border font-chivo py-2">
      <div className="flex items-center justify-between w-full font-sm tracking-wider px-5 pt-5 text-left mb-4">
        <div className="max-w-[85%]">
        &quot;<span className="text-cyan-600 font-bold">{paper?.title}</span>&quot; - {paper?.authors}
        </div>
        <div>
          <p className="pl-5 text-sm text-gray-400 mb-2">{paper?.date}</p>
        </div>
      </div>
      <p className="pl-5 text-sm text-gray-500 mb-2 max-w-[85%] dark:text-white">
        - Published in <span className="text-black dark:text-cyan-200">{paper?.proceedings}</span> proceedings by <span className="text-black dark:text-cyan-200">{paper?.publisher}</span>
      </p>
      <div className="flex justify-between items-center pr-2">
        <div className="max-w-[85%]">
          {paper?.ISBN && (
            <p className="pl-5 text-sm text-gray-500 mb-2 dark:text-white">
              ISBN: <span className="text-black font-bold dark:text-cyan-200">{paper?.ISBN}</span>
            </p>
          )}
          {paper?.link && (
            <p className="pl-5 text-sm text-gray-500 mb-2 dark:text-white">
              Link: <a href={paper?.link} className="text-blue-700 underline dark:text-cyan-200">{paper?.link}</a>
            </p>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex gap-2 border border-cyan-600 py-2 px-3 rounded hover:bg-cyan-600 hover:text-white"
        >
          Read Abstract
          <MdOutlineKeyboardArrowDown size={20} />
        </button>
      </div>
      <div className={`${open ? "" : "hidden"}`}>
        <div className="p-5 font-light">
          <p className="mb-2 text-gray-600 dark:text-white text-justify">
            {paper?.abstract}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
