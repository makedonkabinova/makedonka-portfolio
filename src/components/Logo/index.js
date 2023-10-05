import './index.scss'
import LetterM from '../../assets/images/portfolio-logo-letter.png'
const Logo = () => {
  return(
    <div className='logo-container'>
      <img className='logo' src={LetterM} alt='M'/>
    </div>
  )
}

export default Logo