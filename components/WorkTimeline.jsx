import Job from "./Job";
import jobs from "../data/work.json";

const WorkTimeline = () => {
  return (
      <div className="container mx-auto w-full h-full font-chivo">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%] dark:border-white"></div>
          {jobs.map((job, index) => {
            return <Job key={index} job={job} rightSide={index % 2 === 0} />
          })}
        </div>
      </div>
  );
};

export default WorkTimeline;
