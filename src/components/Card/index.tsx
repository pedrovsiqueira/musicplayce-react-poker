import React from "react";
import { Container, Content, StyledCard, StyledCardContainer } from "./styles";
import backCard from "../../assets/back-card.png";

interface ICardProps {
  isRevealed: boolean;
  playerCards: string[];
}

const Card: React.FC<ICardProps> = ({ isRevealed, playerCards }) => {
  return (
    <Container>
      <Content>
        {playerCards.map((card) => (
          <StyledCardContainer key={card}>
            <StyledCard isRevealed={isRevealed}>
              <figure className="back-card">
                <img src={card} alt="back of playing card" />
              </figure>
              <figure className="front-card">
                <img src={backCard} alt="back of playing card" />
              </figure>
            </StyledCard>
          </StyledCardContainer>
        ))}
      </Content>
    </Container>
  );
};

export default Card;
