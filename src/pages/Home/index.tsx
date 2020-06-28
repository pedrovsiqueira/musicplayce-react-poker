import React from "react";
import { Container, Content } from "./styles";
import musicPlayceLogo from "../../assets/musicPlayceLogo.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <figure>
          <img src={musicPlayceLogo} alt="Music Playce Logo" />
        </figure>
        <h1>Seja bem vindo!</h1>
        <button>Play</button>
      </Content>
    </Container>
  );
};

export default Home;
