import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-navbar">
        <ul>
          <li className="header-navbar_item">
            <a href="#about">Accueil</a>
          </li>
          <li className="header-navbar_item">
            <a href="#Experiences">Projet</a>
          </li>
          <li className="header-navbar_item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
