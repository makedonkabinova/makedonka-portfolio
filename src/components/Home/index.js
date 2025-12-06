import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br/>
                    I'm Makedonka
                </h1>
                <h2>
                  Focused on building apps, models, and meaningful digital experiences.
                </h2>
                <Link to='/contact' class='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home