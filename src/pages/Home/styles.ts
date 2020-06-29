import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    margin: 87px 0;
  }
  section {
    width: 100%;
    max-width: 388px;
    display: flex;
    justify-content: space-around;
  }
`;
