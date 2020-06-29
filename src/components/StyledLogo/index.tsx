import React from "react";
import musicPlayceLogo from "../../assets/musicPlayceLogo.svg";
import { StyledFigure } from "./styles";

const StyledLogo: React.FC = () => {
  return (
    <StyledFigure>
      <img src={musicPlayceLogo} alt="Music Playce Logo" />
    </StyledFigure>
  );
};

export default StyledLogo;
