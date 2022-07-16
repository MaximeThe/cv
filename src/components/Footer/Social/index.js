import './style.scss';

function Social() {
  return (
    <div className="footer-social">
      <ul className="footer-social-list">
        <li>
            <a href="mailto:theneau.maxime@gmail.com">
              <i className="icon-email h-color h-fx" />
            </a>
        </li>
        <li>
          <a href="https://twitter.com/MTheneau">
            <i className="icon-twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MaximeThe">
              <i className="icon-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maxime-theneau">
              <i className="icon-github" />
            </a>
          </li>
      </ul>
    </div>
  );
}

export default Social;
