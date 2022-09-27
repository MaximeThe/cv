import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-author">
        Site réalisé par
        <a
          href="https://github.com/MaximeTheneau"
          target="blank"
          className="footer-author_signature"
          name="lien vers le github de Maxime Theneau"
        >
          <i className="theneau-maxime" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
