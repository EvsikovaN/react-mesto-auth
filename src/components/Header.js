import logo from "../images/icons/logo.svg";

function Header({email, onSignOut}) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <div className='header__tooltip'>
        <p className='header__email'>{email}</p>
        <button className='header__logout' onClick={onSignOut}>
          Выйти
        </button>
      </div>
    </header>
  );
}

export default Header;
