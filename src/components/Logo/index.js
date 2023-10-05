import './index.scss'
import LetterLogo from '../../assets/images/portfolio-logo-letter.png'

const Logo = () => {
  return(
    <div className='logo-container'>
      <img className='solid-logo' src={LetterLogo} alt='letterM'/>
    </div>
  )
}

export default Logo