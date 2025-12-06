import './index.scss'
import Logo from '../Logo'

const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    Makedonka Binova
                </h1>
                <p>
                    Hello, I'm Makedonka — a computer science graduate with a strong focus on AI, machine learning, and full-stack development. I completed my Bachelor’s degree at the Faculty of Electrical Engineering and Computer Science at the University of Maribor, where I built a solid foundation in both web and mobile technologies.
                    I’m currently in the second year of my Master’s studies at the Faculty of Computer and Information Science at the University of Ljubljana, specializing in AI and Deep Learning.
                </p>
                <p>
                    I also have a year of professional experience working with Flutter - mobile development, where I learned how to build reliable features and work within a real development team.
                </p>
                <p>
                    I've built mobile apps, web platforms, backend services, and deep learning projects — each one teaching me something new about problem-solving, architecture, and user experience.
                    I’m motivated by curiosity and real-world impact. If a project challenges me or helps someone, I’m all in.
                </p>
            </div>
            <Logo/>
        </div>
    )
}

export default About