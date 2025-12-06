import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return(
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>Makedonka Binova</h1>
        <p>
          I'm always happy to connect with fellow developers, collaborate on projects, or explore new opportunities.
          Whether it’s about mobile, web, AI, or just sharing ideas, feel free to reach out —
          I would be very happy to hear from you!
        </p>
      </div>
    <div className='make-contact'>
      <h1>Get in touch</h1>
      <div className="contact-info">
        <div className="item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:makedonka.binova@yahoo.com">makedonka.binova@yahoo.com</a>
        </div>
        <div className="item telephone">
          <FontAwesomeIcon icon={faPhone} />
          {isMobile ? (
            <a href="tel:+38669740315">+38669740315</a>
          ) : (
            <span>+38669740315</span>
          )}
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/makedonka-binova" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/makedonkabinova" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact