import Image from "next/image";
import React from "react";

const Job = ({ job, rightSide }) => {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full ${
        rightSide ? "right-timeline" : "left-timeline flex-row-reverse"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 shadow-xl w-14 h-14 rounded-full">
        <Image
          src={`${job?.logo}`}
          className="object-cover overflow-hidden rounded-full mr-2"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div
        className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
          rightSide ? "bg-cyan-600" : "bg-rose-400"
        }`}
      >
        <h3
          className={`mb-3 font-bold text-xl font-playfairDisplay text-white`}
        >
          {job?.title} at {job?.company}
        </h3>
        <p className="text-sm mb-5">{job?.date}</p>
        <p
          className={`text-sm leading-snug tracking-wide text-justify text-opacity-100 text-white`}
        >
          {job?.description}
        </p>
        <div className="text-right text-white mt-6 text-xs">
          <a
            href={`${job?.website}`}
            target="_blank"
            className={`py-1 px-3 border hover:bg-white ${
              rightSide ? "hover:text-cyan-600" : "hover:text-rose-400"
            }`}
          >
            See website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
