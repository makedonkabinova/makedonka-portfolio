import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
          I'm enthusiastic about diving into Android and mobile development,
          as well as exploring exciting web platforms. At our faculty,
          we delved into a diverse range of web technologies, which equipped me with a knack for swiftly grasping new concepts.
          I believe this adaptability will be a great asset as I venture into these new realms. Don't hesitate to contact me.
          Looking forward to the opportunities ahead!
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
      </div>
    </div>
    </div>
  )
}

export default Contact