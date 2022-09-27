import { useDispatch, useSelector } from 'react-redux';
import { imgStickyFalse, toogleNavbar } from '../../../action/header';
import './style.scss';

function Header() {
  const dispatch = useDispatch();
  const toggleNav = useSelector((state) => state.header.toogleNavbar);
  const categories = useSelector((state) => state.category.categories);
  return (
    <>
      {
        categories.filter((item) => item.idTitle === '#Accueil').map((item) => (
          <div key={item.id} id={item.title} className="header-sticky">
            <picture>
              <source srcSet={item.imgWebp} type="image/webp" />
              <img src={item.imgSvg} alt={item.title} />
            </picture>
          </div>
        ))
      }
      <header className="header" id="bienvenue">
        {toggleNav ? (
          <div className="header-navbar-toggle">
            <div className="header-button_close">
              <button
                type="button"
                id="button_nav"
                title="Fermer le menu"
                onClick={() => {
                  dispatch(toogleNavbar());
                }}
              >
                <i className="icon-navbar" />
              </button>
            </div>
          </div>
        ) : (
          <nav className="navbar">
            <div className="header-navbar-toggle">
              <div className="header-button_close">
                <button
                  type="button"
                  onClick={() => dispatch(toogleNavbar())}
                >
                  <i className="icon-x" />
                </button>
              </div>
            </div>
            <ul className="header-navbar">
              {
                categories.map((item) => (
                  <a href={item.idTitle}>
                    <li
                      className="header-navbar-item"
                      onClick={() => {
                        dispatch(toogleNavbar());
                      }}
                    >{item.title}
                    </li>
                  </a>
                ))
              }
            </ul>
          </nav>
        )}
        <ul className="header-navbar-720">
          {
            categories.map((item) => (
              <a href={item.idTitle}>
                <li>{item.title}</li>
              </a>
            ))
          }
        </ul>
      </header>
    </>
  );
}

export default Header;
