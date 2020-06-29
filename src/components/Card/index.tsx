import React from "react";
import { Container, Content } from "./styles";
import backCard from "../../assets/back-card.png";

interface ICardProps {
  isRevealed: boolean;
}

const Card: React.FC<ICardProps> = ({ isRevealed, ...rest }) => {
  return (
    <Container isRevealed={isRevealed} {...rest}>
      <Content>
        <figure>
          <img src={backCard} alt="back of playing card" />
        </figure>
      </Content>
    </Container>
  );
};

export default Card;
