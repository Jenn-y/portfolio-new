import Project from "./Project";
import projects from "../data/projects.json";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectSection;
