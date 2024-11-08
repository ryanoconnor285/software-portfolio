import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import fe_mobile1 from '../assets/fe_mobile/IMG_2091.PNG';
import fe_mobile2 from '../assets/fe_mobile/IMG_2092.PNG';
import fe_mobile3 from '../assets/fe_mobile/IMG_2093.PNG';
import fe_mobile4 from '../assets/fe_mobile/IMG_2094.PNG';
import fe_mobile5 from '../assets/fe_mobile/IMG_2095.PNG';
import fe_mobile6 from '../assets/fe_mobile/IMG_2096.PNG';
import fe_mobile7 from '../assets/fe_mobile/IMG_2097.PNG';

interface Project {
  id: number;
  title: string;
  photos: string[];
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'flyExclusive Customer App',
      photos: [
        fe_mobile1, 
        fe_mobile2, 
        fe_mobile3, 
        fe_mobile4, 
        fe_mobile5, 
        fe_mobile6, 
        fe_mobile7, 
      ]
    },
    {
      id: 2,
      title: 'flyExclusive Pilot App',
      photos: [
        fe_mobile1, 
        fe_mobile2, 
        fe_mobile3, 
        fe_mobile4, 
        fe_mobile5, 
        fe_mobile6, 
        fe_mobile7, 
      ]
    },
    {
      id: 3,
      title: 'Project 3',
      photos: [
        fe_mobile1, 
        fe_mobile2, 
        fe_mobile3, 
        fe_mobile4, 
        fe_mobile5, 
        fe_mobile6, 
        fe_mobile7, 
      ]
    }
  ];

  return (
    <div id="projectsComponent" className="component">
      <h1>Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="carousel-modal">
          <button className="close-button" onClick={() => setActiveProject(null)}>Close</button>
          <Carousel showThumbs={false}>
            {activeProject.photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Projects;
