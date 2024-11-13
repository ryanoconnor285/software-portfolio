import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import ProjectCard from "../components/ProjectCard/ProjectCard";
import fe_mobile1 from "../assets/fe_mobile/IMG_2091.PNG";
import fe_mobile2 from "../assets/fe_mobile/IMG_2092.PNG";
import fe_mobile3 from "../assets/fe_mobile/IMG_2093.PNG";
import fe_mobile4 from "../assets/fe_mobile/IMG_2094.PNG";
import fe_mobile5 from "../assets/fe_mobile/IMG_2095.PNG";
import fe_mobile6 from "../assets/fe_mobile/IMG_2096.PNG";
import fe_mobile7 from "../assets/fe_mobile/IMG_2097.PNG";
import { Project } from "../types/types";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "flyExclusive Customer App",
      description:
        "flyExclusive is a private jet charter company that offers a mobile app for customers to book flights, manage their account, and more. I worked on the mobile app, which was built with React Native and TypeScript. I also wrote tests using Jest, Enzyme, and Detox.",
      skills: [
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "Redux Saga" },
        { name: "Jest" },
        { name: "Enzyme" },
        { name: "Detox" },
      ],
      photos: [
        fe_mobile1,
        fe_mobile2,
        fe_mobile3,
        fe_mobile4,
        fe_mobile5,
        fe_mobile6,
        fe_mobile7,
      ],
    },
    {
      id: 2,
      title: "flyExclusive Pilot App",
      description:
        "flyExclusive is a private jet charter company that offers a mobile app for pilots to manage their schedule, view flight details, and more. I worked on the mobile app, which was built with React Native and TypeScript. I also wrote tests using Jest, Enzyme, and Detox.",
      skills: [
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "Redux Saga" },
        { name: "Jest" },
        { name: "Enzyme" },
        { name: "Detox" },
      ],
      photos: [
        fe_mobile1,
        fe_mobile2,
        fe_mobile3,
        fe_mobile4,
        fe_mobile5,
        fe_mobile6,
        fe_mobile7,
      ],
    },
    {
      id: 3,
      title: "flyExclusive Admin Dashboard",
      description:
        "flyExclusive is a private jet charter company that offers an admin dashboard for employees to manage flights, view reports, and more. I worked on the admin dashboard, which was built with React and TypeScript. I also wrote tests using Jest and Enzyme.",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Jest" },
        { name: "Enzyme" },
      ],
      photos: [
        fe_mobile1,
        fe_mobile2,
        fe_mobile3,
        fe_mobile4,
        fe_mobile5,
        fe_mobile6,
        fe_mobile7,
      ],
    },
    {
      id: 4,
      title: "Duke TIC",
      description:
        "Duke TIC is a centralized platform for Duke researchers to manage their research projects, view reports, and more. I worked on the front-end, which was built with React and TypeScript.",
      skills: [{ name: "React" }, { name: "TypeScript" }],
      photos: [
        fe_mobile1,
        fe_mobile2,
        fe_mobile3,
        fe_mobile4,
        fe_mobile5,
        fe_mobile6,
        fe_mobile7,
      ],
    },
    {
      id: 5,
      title: "Precision Dosing",
      description:
        "This is a precision dosing system for pharmaceuticals.  This fullstack application features a backend built with Node.js, Express, and MongoDB. I collaborated with pharmacists to develop multiple plugins for the backend.  Each plugin represented a specific method for providing the most appropriate dose of a medication for a patient.  The frontend is built with React and TypeScript, I built this to allow administrators to select which plugins to use for a specific organization.",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Jest" },
        { name: "Enzyme" },
      ],
      photos: [
        fe_mobile1,
        fe_mobile2,
        fe_mobile3,
        fe_mobile4,
        fe_mobile5,
        fe_mobile6,
        fe_mobile7,
      ],
    },
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
            <ProjectCard key={project.id} project={project} />
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="carousel-modal">
          <button
            className="close-button"
            onClick={() => setActiveProject(null)}
          >
            Close
          </button>
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
