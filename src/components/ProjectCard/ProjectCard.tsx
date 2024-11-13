import "./ProjectCard.css";

interface Skill {
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  photos: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <ul className="project-skills">
        {project.skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
      {/* If you want to show photos, you can include them here */}
      {/* {project.photos.map((photo, index) => (
        <img key={index} src={photo} alt={`${project.title} - Photo ${index + 1}`} />
      ))} */}
    </div>
  );
};

export default ProjectCard;
