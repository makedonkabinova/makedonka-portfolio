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
          {playStoreLink && <span aria-disabled="true" className="project-card__btn project-card__btn--store project-card__btn--disabled">Upcoming to Play Store</span>}
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
