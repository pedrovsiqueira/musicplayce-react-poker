import styled from "styled-components";

interface ICardProps {
  isRevealed: boolean;
}

export const Container = styled.div<ICardProps>`
  min-height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  width: 230px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  figure {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
