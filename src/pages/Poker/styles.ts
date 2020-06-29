import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  height: 100vh;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

  & > section {
    height: 100%;
    display: flex;
    align-items: center;
  }

  p {
    transform: rotate(270deg);
    height: 50px;
    width: 160px;
    font-size: 3rem;
    font-weight: 600;

    @media (max-width: 500px) {
      transform: rotate(0);
      width: 100%;
      text-align: center;
    }
  }

  #second-player {
    transform: rotate(-270deg);
    @media (max-width: 500px) {
      transform: rotate(0);
    }
  }
`;

export const ControlSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

export const StyledWinnerBox = styled.div`
  height: 150px;
  background-color: rgba(1, 1, 1, 0.3);
  margin: 20px 0;
  width: 350px;
  border-radius: 17px;

  h1 {
    font-size: 2.8rem;
    text-align: center;
    padding: 10px;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 2.8rem;
    }
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
