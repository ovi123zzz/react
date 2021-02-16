import iconFb from '../images/icon-facebook.svg'

const SocialTag = ({ socialTag }) => {
  return (
    <div className='socialTag'>
      <img src={iconFb} alt='fb' />
      <span>{socialTag}</span>
    </div>
  )
}

export default SocialTag