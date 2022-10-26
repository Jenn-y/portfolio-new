import Image from "next/image";

const Project = ({ project }) => {
  const technologiesList = (technologies) => {
    let list = "";
    technologies.forEach((t) => {
      list += t + ", ";
    });
    return list.slice(0, list.length - 2);
  };

  return (
    <div className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 basis-1/3 flex-1">
      <Image
        src={`${project?.img_src}`}
        className="rounded-lg object-cover"
        width={"100%"}
        height={"57%"}
        layout="responsive"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/75 hover:opacity-100 opacity-0 text-white font-chivo">
        <div className="p-10">
          <p className="white-space-normal text-xl mb-10 text-center font-playfairDisplay font-bold">
            {project?.name}
          </p>
          <p className="white-space-normal text-xs md:text-sm text-justify">
            {project?.description}
          </p>
          <p className="mt-5 text-sm text-justify">
            Technologies used:{" "}
            <span className="text-cyan-300">
              {technologiesList(project?.technologies)}
            </span>
            .
          </p>
          <div className="flex justify-between items-center mt-10">
            <p className="text-sm text-gray-300">{project?.date}</p>
            <a
              href={`${project?.link}`}
              target="_blank"
              className="border-b-2 border-rose-400 px-5 py-1 font-bold hover:bg-rose-400"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
