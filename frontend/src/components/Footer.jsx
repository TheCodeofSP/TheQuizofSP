import "./Footer.scss";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&gt; CREATED BY</p>
      <a href="https://thecodeofsp.fr" target="_blank" rel="noreferrer">
        <img src={Logo} alt="TheCodeofSP Logo" className="footer__logo" />
      </a>
      <div className="footer__links">
        <a
          href="https://github.com/thecodeofsp"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <span className="footer__separator">•</span>

        <a href="https://thecodeofsp.fr" target="_blank" rel="noreferrer">
          PORTFOLIO
        </a>
        <span className="footer__separator">•</span>
        <a href="https://thecodeofsp.fr" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
