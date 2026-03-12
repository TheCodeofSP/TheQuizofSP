import "./Footer.scss";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&gt; CREATED BY</p>

      <a href="https://thecodeofsp.fr" target="_blank" rel="noreferrer">
        <img src={Logo} alt="TheCodeofSP Logo" className="footer__logo" />
      </a>

      <section className="footer__about">
        <strong>À propos du quiz</strong>
        <p>
          {" "}
          Ce quiz permet de découvrir une facette de la personnalité de SP à
          travers différents sujets qu'elle apprécie : films, animés, sport,
          musique, mode et bien d’autres.
        </p>
        <p>
          Pas de passion unique, mais certains goûts et préférences l’ont
          particulièrement marquée.
        </p>
        <p>
          Niveau 1 : des questions sur des sujets marquant. Ex: sur l'animé
          préféré.
        </p>
        <p>
          Niveau 2 : des questions plus larges sur mes centres d’intérêt. Ex:
          sur les animés favoris
        </p>
        <p>
          Niveau 3 : une question dédiée à un thème précis : la Grèce antique.
        </p>
        <p>Saurez-vous me cerner ?</p>
      </section>

      <div className="footer__links">
        <a
          href="https://www.instagram.com/thecodeofsp/"
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

        <a
          href="www.linkedin.com/in/sandrinepham69132b145"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
