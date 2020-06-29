import styled from "styled-components";

interface ICardProps {
  isRevealed: boolean;
  playerCards?: string[];
}

export const Container = styled.div`
  min-width: 120px;
  height: 100vh;

  @media (max-width: 500px) {
    height: auto;
    min-height: 100px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCardContainer = styled.div`
  width: 120px;
  height: 168px;

  @media (max-width: 500px) {
    width: 80px;
    height: 100px;
    margin: 0 10px;
  }
`;

export const StyledCard = styled.div<ICardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;

  ${(props) =>
    props.isRevealed
      ? "transform: rotateY(180deg);"
      : "transform: rotateY(0deg);"}

  .front-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
  }

  .back-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    text-align: center;
    transform: rotateY(180deg);
  }
`;
