import React from "react";
import "./CardBlueBackgroundSection.scss";
interface CardBlueBackgroundProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  showSocialLogos: boolean;
}

const CardBlueBackground: React.FC<CardBlueBackgroundProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  showSocialLogos,
}) => {
  return (
    <div className="CardBlueBackground_Container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      ></link>
      <div className="CardBlueBackground_Card">
        <div className="CardBlueBackground_Left">
          <h1>{title}</h1>
          <p>{description}</p>
          <button>{buttonText}</button>
          {showSocialLogos && (
            <div className="SocialLogos">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-tiktok"></i>
              <i className="fab fa-youtube"></i>
            </div>
          )}
        </div>
        <div className="CardBlueBackground_Right">
          <img src={imageUrl} alt="Programmes" />
        </div>
      </div>
    </div>
  );
};

export default CardBlueBackground;
