import "./Header.scss";
import ProgrammesImage from "@/assets/images/Programmes/Programmes.png";
const Header = () => {
  return (
    <div className="Header">
      <div className="Container">
        <div className="Programmes_Left">
          <h3>Tu voudrais Vérifié ton Programme si :</h3>
          <p>
            <i className="fas fa-hand-point-right"></i> il est adapté pour toi ?
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> les exercices sont bien
            choisis ?{" "}
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> le volume de la semaine
            est adapté ?{" "}
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> la répartition des
            exercices est faite de manière intelligente ?{" "}
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> tes points faibles sont
            optimisés ?{" "}
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> l'intensité que tu
            donnes est assez élevé ?{" "}
          </p>
          <p>
            <i className="fas fa-hand-point-right"></i> la fréquence
            d'entraînement est assez bonne ?{" "}
          </p>
          <button>Obtient ton Programme</button>
        </div>
        <div className="Programmes_Right">
          <img src={ProgrammesImage} alt="Programmes" />
        </div>
      </div>
    </div>
  );
};

export default Header;
