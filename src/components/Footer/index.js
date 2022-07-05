import './style.scss';

function Footer() {
  return (
    <footer>
      <div className="social">
        <ul className="social-list">
          <li>
            <a href="mailto:theneau.maxime@gmail.com">
              <i className="icon-email h-color h-fx" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/MTheneau">
              <i className="icon-twitter h-color h-fx" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MaximeThe">
              <i className="icon-linkedin h-color h-fx" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maxime-theneau">
              <i className="icon-github h-color h-fx" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
