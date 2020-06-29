import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  height: 100vh;

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
  }

  #second-player {
    transform: rotate(-270deg);
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
    text-align: center;
    padding: 10px;
    font-weight: 500;
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;
