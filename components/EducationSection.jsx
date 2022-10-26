import Image from "next/image";
import graduation from "../public/graduation.JPG";
import UniversityCard from "./UniversityCard";

const EducationSection = () => {
  return (
    <div className="w-full min-h-[65vh] relative">
      <div className="relative bg-gradient-to-b from-rose-400 rounded-full w-[400px] h-[400px] mt-36 mx-auto overflow-hidden z-40">
        <Image src={graduation} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex justify-between items-center z-20">
          <UniversityCard
            name="University Sarajevo School of Science and Technology"
            country="Bosnia and Herzegovina"
            description="Bachelor's degree in Computer Science with minor in Economics"
            logo="/work/ssst.jpg"
            GPA="10.0/10"
            date="2018-2022"
            link="https://ssst.edu.ba/"
            right={false}
          />
          <UniversityCard
            name="University of Buckingham"
            country="United Kingdom"
            description="Bachelor's degree in Computer Science with minor in Economics on a double-degree program with SSST University"
            logo="/work/buch.png"
            GPA="96/100 - First Class"
            date="2018-2022"
            link="https://www.buckingham.ac.uk/"
            right={true}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
