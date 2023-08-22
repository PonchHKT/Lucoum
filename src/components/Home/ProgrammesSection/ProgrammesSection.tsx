import "./ProgrammesSection.scss";
import React from "react";

interface ProgrammesSectionProps {
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  imageUrl: string;
}

const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({
  title,
  description1,
  description2,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="Programmes">
      <div className="Programmes_Container">
        <div className="Programmes_Left">
          <h3>{title}</h3>
          <p>
            {description1} <i className="fas fa-check-circle"></i>
          </p>
          <p>
            {description2} <i className="fas fa-check-circle"></i>
          </p>
          <button>{buttonText}</button>
        </div>
        <div className="Programmes_Right">
          <img src={imageUrl} alt="Programmes" />
        </div>
      </div>
    </div>
  );
};

export default ProgrammesSection;
