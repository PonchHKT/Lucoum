import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Lucoum</h1>
        <p>Sience & Hypertrophie</p>
      </div>
      <ul className="nav-items">
        <li>Accueil</li>
        <li>Programmes</li>
        <li>Qui suis-je ?</li>
        <li>FAQ</li>
        <li>Réseaux sociaux</li>
        <li>Avis</li>
      </ul>
      <button className="login-btn">Se connecter</button>
    </nav>
  );
};

export default Navbar;
