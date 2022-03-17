import { useState, useEffect } from 'react';
import projectsData from './projectsData';
import Project from './Project';
import './ProjectsSection.css';

const ProjectsSection = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const image = windowWidth >= 1100 ? 'desktop' : 'mobile';

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.addEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <section className="projects grid-container">
      <div className="section-title">
        <h2>our creations</h2>
        <button type="button" className="upper-btn">
          see all
        </button>
      </div>

      <div className="projects-container grid-container">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            img={project[image]}
          ></Project>
        ))}
      </div>
      <button type="button" className="lower-btn">
        see all
      </button>
    </section>
  );
};

export default ProjectsSection;
