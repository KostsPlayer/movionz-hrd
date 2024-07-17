import React from "react";
import { Info } from "lucide-react";

const Card = ({ content, additionalText, color, border, top, left }) => {
  const cardStyle = {
    backgroundColor: color,
    height: "55px",
    width: "130px",
    padding: "10px",
    borderRadius: "5px",
    borderLeft: border,
    color: "#5272E9",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    fontSize: "8px",
    top: top,
    left: left,
  };

  const additionalTextStyle = {
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "5px",
  };

  return (
    <div style={cardStyle}>
      <div>{content}</div>
      <div style={additionalTextStyle}>
        <Info size={10} style={iconStyle} />
        {additionalText}
      </div>
    </div>
  );
};

export default Card;
