import React from "react";
import "./LucoumCard.scss";

interface LucoumCardProps {
  backgroundColor?: string;
  imageUrl: string;
  title: string;
  content: string;
  textColor?: string;
  reverseLayout?: boolean; // New prop to reverse the layout
}

const LucoumCard: React.FC<LucoumCardProps> = ({
  backgroundColor = "#007bff",
  imageUrl,
  title,
  content,
  textColor = "white",
  reverseLayout = false, // Default is not to reverse the layout
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  const textStyle = {
    color: textColor,
  };

  return (
    <div className="PresentationLucoum" style={cardStyle}>
      <div className={`LucoumContent ${reverseLayout ? "reversed" : ""}`}>
        {reverseLayout ? (
          <>
            <div className="LucoumText" style={textStyle}>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
            <div className="LucoumImage">
              <img src={imageUrl} alt="Lucoum" />
            </div>
          </>
        ) : (
          <>
            <div className="LucoumImage">
              <img src={imageUrl} alt="Lucoum" />
            </div>
            <div className="LucoumText" style={textStyle}>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LucoumCard;
