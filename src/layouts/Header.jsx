import LogoIcon from '../assets/images/logo_samurai.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={LogoIcon} alt='logo samurai' width="100" />
      <h1>
        Social Network WofS
      </h1>
    </header>
  )
}

export default Header