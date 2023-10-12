import './index.scss'

const ProjectCard = ({ title, imageUrl, githubLink, description }) => {
  return (
    <a href={githubLink} className="project-card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;