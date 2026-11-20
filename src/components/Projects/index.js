import './index.scss'
import ProjectCard from '../ProjectCard'
import EaticalWeb from '../../assets/images/eatical_web_project.png'
import EaticalDesktop from '../../assets/images/eatical_desktop_project.png'
import KidsDrawingApp from '../../assets/images/kids_drawing_app_project.png'
import Portfolio from '../../assets/images/portfolio_project.png'
import EaticalMobile from '../../assets/images/eatical_mobile_project.png'
import LostAndFound from '../../assets/images/lost_and_found_project.png'
import DivideRecycle from '../../assets/images/divide_and_recycle_android.png'
import YogaAsanas from '../../assets/images/yoga_asanas_web.png'
import OrganDetector from '../../assets/images/canny_edge_organ_detector.png'

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
      playStoreLink: '#',
      description: 'Simple app for lost and found items. The app is still in progress.'
    },
    {
      title: 'MediConnect',
      githubLink: 'https://github.com/medi-connect/medi-connect',
      description: 'A cloud based solution that connects patients to hospitals. For more information, click on the card to see github repository.'
    },
    {
      title: 'Travel Assistant',
      githubLink: 'https://github.com/makedonkabinova/travel_assistant_flanT5',
      description: 'School project within the subject Deep Learning, in order to research and learn while finetuning the model Flan-T5 on different dataset variations.'
    },
    {
      title: 'Divide&Recycle',
      imageUrl: DivideRecycle,
      githubLink: 'https://github.com/makedonkabinova/divide_and_recycle',
      playStoreLink: '#',
      description: 'Mobile Android app for classifying waste into different categories in order to help people recycle more and better.'
    },
    {
      title: 'Yoga Asanas',
      imageUrl: YogaAsanas,
      githubLink: 'https://github.com/makedonkabinova/yoga_asanas',
      liveLink: 'https://makedonkabinova.github.io/yoga_asanas/',
      description: 'A web page that helped me better organize myself, explore and learn yoga asanas with a clean, interactive interface.'
    },
    {
      title: 'Canny Edge Detector',
      imageUrl: OrganDetector,
      githubLink: 'https://github.com/makedonkabinova/canny_edge_detector',
      description: 'Detecting organ contours in 3D CT medical images using the Canny Edge Detection algorithm - including noise reduction, Sobel gradient computation, non-maximum suppression, and hysteresis thresholding.'
    },
    {
      title: 'Academic Life Support Assistant',
      githubLink: 'https://github.com/UL-FRI-NLP-Course/ul-fri-nlp-course-project-2025-2026-mma',
      description: 'NLP course project: a retrieval-based assistant that helps students discover relevant elective courses through semantic search, using SentenceTransformers, FAISS indexing, and LLaMA 3, with TF-IDF and ChatGPT baselines for evaluation.'
    }
  ];

  return (
    <div className='container projects-page'>
      <h1 className='projects_title'>
        <a href='https://github.com/makedonkabinova?tab=repositories'>
          Some of my projects
        </a>
      </h1>
        <div className='text-zone'>
          <p className='projects-intro'>
            Not every project here is polished, some are small, simple,
            or born from curiosity rather than perfection.
            But each one carries a lesson: a new framework learned, a concept understood,
            a mistake corrected, a spark of creativity followed.
            Together, alongside other projects you can find on my github,
            they map the path of how I've grown as a developer.
            Click on any card to explore it on GitHub, or use the action buttons to view the app.
          </p>
        </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            playStoreLink={project.playStoreLink}
            liveLink={project.liveLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
