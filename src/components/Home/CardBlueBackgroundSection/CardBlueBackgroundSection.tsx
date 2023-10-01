import React from "react";
import "./CardBlueBackgroundSection.scss";

interface CardBlueBackgroundProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  showSocialLogos: boolean;
  showDescription?: boolean; // Add this prop to control the description visibility
  showNumberedDescriptions?: boolean; // Add this prop to control numbered descriptions visibility
  numberedDescriptions?: string[]; // Add this prop to pass in numbered descriptions
}

const CardBlueBackground: React.FC<CardBlueBackgroundProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  showSocialLogos,
  showDescription = true, // Default to showing description
  showNumberedDescriptions = true, // Default to showing numbered descriptions
  numberedDescriptions = [], // Default to an empty array
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
          {showDescription && <p>{description}</p>}
          {showNumberedDescriptions && (
            <>
              {numberedDescriptions.map((item, index) => (
                <p key={index}>► {item}</p>
              ))}
            </>
          )}
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
