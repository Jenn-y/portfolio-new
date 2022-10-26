import Image from "next/image";

const UniversityCard = ({
  name,
  country,
  description,
  logo,
  GPA,
  date,
  link,
  right,
}) => {
  return (
    <div className="min-h-[55vh] shadow-lg max-w-[29vw] py-12 px-5 bg-white/60 z-50 font-chivo dark:bg-white/80">
      <div className="flex items-center mx-auto order-1 shadow-xl w-16 h-16 rounded-full">
        <Image
          src={`${logo}`}
          className="object-cover overflow-hidden rounded-full mr-2"
          width={"100%"}
          height={"100%"}
          alt="university logo"
        />
      </div>
      <div className={`${right ? "text-right" : "text-left"} mt-10`}>
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className="text-xl font-playfairDisplay text-center mb-2">
            {name}
          </h1>
        </a>
        <p className="text-sm text-center mb-2 text-gray-600">{country}</p>
        <p className="text-sm text-center mb-3 text-gray-600">{date}</p>
        <p className={`mb-5 ${right ? "text-right ml-10" : "mr-10"}`}>
          {description}
        </p>
        <h2 className="font-bold text-sm text-gray-700">GPA: {GPA}</h2>
      </div>
    </div>
  );
};

export default UniversityCard;
