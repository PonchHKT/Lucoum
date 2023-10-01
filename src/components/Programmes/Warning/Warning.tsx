import "./Warning.scss";

const Warning = () => {
  return (
    <div className="Warning">
      <div className="Warning_Logo">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <div className="Warning_Text">
        <h3>ATTENTION!!</h3>
        <h4>Ne m'envoie pas ton programme si:</h4>
        <p>- c'est un programme maison au poids du corps</p>
        <p>
          - tu as d'autres objectifs que l'hypertrophie (la prise de muscle)
          comme la force, l'explosivité,
          <br /> la puissance etc.
        </p>
      </div>
    </div>
  );
};

export default Warning;
