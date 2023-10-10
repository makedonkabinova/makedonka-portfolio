import './index.scss'
import LetterM from '../../assets/images/MB_logo_outlined.svg'
const Logo = () => {
  return(
    <div className='logo-container'>
      <img className='logo' src={LetterM} alt='M'/>
    </div>
  )
}

export default Logo