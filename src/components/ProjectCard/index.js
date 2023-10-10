import './index.scss'

const ProjectCard = ({ title, imageUrl, githubLink, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <a href={githubLink}>GitHub Link</a>
    </div>
  );
}

export default ProjectCard;