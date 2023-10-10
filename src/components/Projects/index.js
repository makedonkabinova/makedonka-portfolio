import './index.scss'
import ProjectCard from '../ProjectCard'
import EaticalWeb from '../../assets/images/eatical_web_project.png'
import EaticalDesktop from '../../assets/images/eatical_desktop_project.png'
import KidsDrawingApp from '../../assets/images/kids_drawing_app_project.png'
import Portfolio from '../../assets/images/portfolio_project.png'
import EaticalMobile from '../../assets/images/eatical_mobile_project.png'
import LostAndFound from '../../assets/images/lost_and_found_project.png'
const Projects = () => {
  const projects = [
    {
      title: 'Eatical',
      imageUrl: EaticalWeb,
      githubLink: 'https://github.com/makedonkabinova/maribor-digital-twin',
      description: 'Application in which restaurants can increase their chance of selling their low selling products while customers can save money and eat delicious food at the same time.',
    },
    {
      title: 'Eatical Desktop',
      imageUrl: EaticalDesktop,
      githubLink: 'https://github.com/makedonkabinova/eatical-desktop',
      description: 'A special desktop platform for restaurants to enter our Eatical community and contribute for a better world.',
    },
    {
      title: 'Eatical Mobile App',
      imageUrl: EaticalMobile,
      githubLink: 'https://github.com/makedonkabinova/eatical-mobile-app',
      description: 'Mobile app for taking photos and sending it to our server.'
    },
    {
      title: 'Kids Drawing App',
      imageUrl: KidsDrawingApp,
      githubLink: 'https://github.com/makedonkabinova/kids-drawing-app',
      description: 'Simple drawing app for kids with the possibility to upload photos, draw over them, save and send the drawings.',
    },
    {
      title: 'Current Portfolio :)',
      imageUrl: Portfolio,
      githubLink: 'https://github.com/makedonkabinova/makedonka-portfolio',
      description: 'Portfolio describing me, my competences and projects.',
    },
    {
      title: 'Lost and Found',
      imageUrl: LostAndFound,
      githubLink: '',
      description: 'Simple app for lost and found items. The app is still in progress.'
    }
    // Add more project objects as needed
  ];

  return (
    <div className='container'>
      <h1 className='projects_title'>
        <a href='https://github.com/makedonkabinova?tab=repositories'>
          Projects
        </a>
      </h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects