import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid red; */
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  padding: 0 50px;
  height: 100vh;
`;

export const ControlSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
`;

export const StyledWinnerBox = styled.div`
  height: 150px;
  background-color: rgba(1, 1, 1, 0.3);
  margin: 20px 0;
  width: 60%;
  border-radius: 17px;

  h1 {
    text-align: center;
    padding: 10px;
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
