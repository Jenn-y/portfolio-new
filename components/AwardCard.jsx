import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AwardCard = ({ award, fellowship }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border font-chivo py-2">
      <h2>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full font-sm tracking-wider px-5 pt-5 text-left"
        >
          <span>{award?.name}</span>
          <MdOutlineKeyboardArrowDown size={30} />
        </button>
      </h2>
      <p className="pl-5 text-sm text-gray-400">{award?.date}</p>
      <div className={`${open ? "" : "hidden"}`}>
        <div className="p-5 font-light">
          <p className="mb-2 text-gray-500 dark:text-white">
            - {award?.description}
          </p>
          <p className="text-gray-500 dark:text-white">
            {fellowship ? "Organized by " : "Awarded by "}
            <a className="text-rose-600 font-semibold" href={award?.link}>
              {award?.organization}
            </a>
            {fellowship && (
              <span>
                and supported and certified by <span className="text-rose-600">{award?.support}</span>.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
