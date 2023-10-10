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
                  web & mobile developer
                </h2>
                <Link to='/contact' class='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home