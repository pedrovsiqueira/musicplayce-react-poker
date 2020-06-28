import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    background: rgba(1, 1, 1, 0.3);
    border-radius: 14px;
    padding: 21px 58px;
  }

  h1 {
    margin: 87px 0;
  }
  section {
    width: 100%;
    max-width: 388px;
    display: flex;
    justify-content: space-around;
  }
`;
