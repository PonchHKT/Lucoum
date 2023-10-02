import "./LucoumCardBottom.scss";
import LucoumImageBottom from "@/assets/images/Lucoum/LucoumBottom.png";

const LucoumCardBottom = () => {
  return (
    <div className="LucoumCardBottom">
      <div className="LucoumCardBottomContent">
        <div className="LucoumTextBottom">
          <h3>Pourquoi me faire Confiance ?</h3>
          <p>
            Je suis passionné de musculation depuis maintenant 6 ans, magré de
            nombreux arrêts à cause de blessures, je n'ai jamais arrêté de
            m'informer dans ce domaine. Je continue à me tenir à jour des
            dernières études scientifiques. Je me remets sans cesse en question
            pour pouvoir fournir les meilleurs conseils et les meilleurs
            programmes d'entraînement. Contrairement à certains coachs qui
            vendent leurs programmes dans plusieurs domaines, j'ai décidé de me
            spécialiser dans un seul domaine qui est la prise de muscle plus
            précisément l'hypertrophie musculaire pour être le meilleur dans ce
            domaine.
          </p>
        </div>
        <div className="LucoumImageBottom">
          <img src={LucoumImageBottom} />
        </div>
      </div>
    </div>
  );
};

export default LucoumCardBottom;
