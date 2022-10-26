import { useEffect, useState } from "react";
import paperList from "../data/papers.json";
import ResearchCard from "./ResearchCard";

const ResearchSection = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    setPapers(paperList);
  }, []);

  return (
    <div className="min-h-[90vh] font-playfairDisplay pb-10 dark:text-white">
      <h1 className="py-5 text-2xl font-bold">Published papers</h1>
      {papers.map((paper, index) => {
        return <ResearchCard key={index} paper={paper} />;
      })}
    </div>
  );
};

export default ResearchSection;
