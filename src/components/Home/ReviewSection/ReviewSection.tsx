import "./ReviewSection.scss";

const ReviewSection = () => {
  return (
    <div className="Review_Container">
      <div className="Review_Stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="Review_Content">
        <h2>Avis</h2>
        <p>
          Découvrez les témoignages d'adhérents qui sont <br />
          passés par là avant vous et qui m'ont fait confiance.
        </p>
        <button>Voir les avis</button>
      </div>
    </div>
  );
};

export default ReviewSection;
