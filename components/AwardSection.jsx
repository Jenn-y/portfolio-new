import { useEffect, useState } from "react";
import AwardCard from "./AwardCard";
import awardList from "../data/awards.json";
import fellowshipList from '../data/fellowships.json'
import badge from '../public/innovation.png'
import Image from 'next/image'


const AwardSection = () => {
  const [awards, setAwards] = useState([]);
  const [fellowships, setFellowships] = useState([]);

  useEffect(() => {
    setAwards(awardList);
    setFellowships(fellowshipList)
  }, []);

  badge = {
    "name": "Innovation Badge",
    "description": "Offered by Experiential Learning Network at the University at Buffalo, this badge recognizes successful completion of a mentored innovation project. Badge earners have completed the requirements for project preparation, engagement and reflection, and demonstrated their ability to leverage their project experience through capacity building and storytelling. Click on the badge for more details.",
    "organization": "University at Buffalo",
    "date": "Aug 2022",
    "link": "https://www.buffalo.edu"
  }

  return (
    <div className="min-h-[90vh] font-playfairDisplay pb-10 dark:text-white mt-10">
      <div className="flex w-[100%] mb-10">
        <a href="https://www.credly.com/badges/fb81d586-3abd-4fb4-89a4-d365a74dc291/public_url" target="_blank"><Image src='/innovation.png' alt="badge picture" width={"120%"} height={"120%"} /></a>
        <div className="w-[2%]"></div>
        <AwardCard award={badge} fellowship={false} />
      </div>
      <h1 className="py-5 text-2xl font-bold">Fellowships</h1>
      {fellowships.map((fellowship, index) => {
        return <AwardCard key={index} award={fellowship} fellowship={true} />
      })}
      <h1 className="py-5 text-2xl font-bold">Awards</h1>
      {awards.map((award, index) => {
        return <AwardCard key={index} award={award} fellowship={false} />
      })}
    </div>
  );
};

export default AwardSection;
