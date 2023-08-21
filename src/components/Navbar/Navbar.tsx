import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Lucoum</h1>
        <p>Sience & Hypertrophie</p>
      </div>
      <ul className="nav-items">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/programmes">Programmes</a>
        </li>
        <li>
          <a href="/lucoum">Qui suis-je ?</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/socials">Réseaux sociaux</a>
        </li>
        <li>
          <a href="/avis">Avis</a>
        </li>
      </ul>
      <button className="login-btn">Se connecter</button>
    </nav>
  );
};

export default Navbar;
