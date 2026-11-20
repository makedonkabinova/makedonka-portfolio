import './index.scss'

const ProjectCard = ({ title, imageUrl, githubLink, description, playStoreLink, liveLink }) => {
  if (playStoreLink || liveLink) {
    return (
      <div className="project-card project-card--buttons">
        <h3>{title}</h3>
        {imageUrl && <img src={imageUrl} alt={title} />}
        <p>{description}</p>
        <div className="project-card__actions">
          {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" className="project-card__btn">GitHub</a>}
          {playStoreLink && <a href={playStoreLink} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--store">Upcoming to Play Store</a>}
          {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--live">View Webpage</a>}
        </div>
      </div>
    );
  }

  return (
    <a href={githubLink} className="project-card">
      <h3>{title}</h3>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
