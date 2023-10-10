import './index.scss'
import LogoM from '../../assets/images/MB_logo.svg'
import  { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={ LogoM } alt='logo'/>
            </Link>
            <nav>
                <NavLink exact='true' activeClassName='active' to='/'>
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink exact='true' activeClassName='active' className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faCode}/>
                </NavLink>
                <NavLink exact='true' activeClassName='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink exact='true' activeClassName='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="www.linkedin.com/in/makedonka-binova"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/makedonkabinova"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar