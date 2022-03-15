import  projectsData  from "./projectsData";
import Project from "./Project";
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects grid-container">
      <h2>our creations</h2>
      <div className="projects-container grid-container">
        {projectsData.map((project, index) => (
          <Project key={index} {...project}></Project>
        ))}
      </div>
      <button type="button">see all</button>
    </section>
  );
};

export default ProjectsSection;
