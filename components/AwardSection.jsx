import { useEffect, useState } from "react";
import AwardCard from "./AwardCard";
import awardList from "../data/awards.json";
import fellowshipList from '../data/fellowships.json'

const AwardSection = () => {
  const [awards, setAwards] = useState([]);
  const [fellowships, setFellowships] = useState([]);

  useEffect(() => {
    setAwards(awardList);
    setFellowships(fellowshipList)
  }, []);

  return (
    <div className="min-h-[90vh] font-playfairDisplay pb-10 dark:text-white">
      <h1 className="py-5 text-2xl font-bold">Awards</h1>
      {awards.map((award, index) => {
        return <AwardCard key={index} award={award} fellowship={false} />;
      })}
      <h1 className="py-5 text-2xl font-bold">Fellowships</h1>
      {fellowships.map((fellowship, index) => {
        return <AwardCard key={index} award={fellowship} fellowship={true} />;
      })}
    </div>
  );
};

export default AwardSection;
