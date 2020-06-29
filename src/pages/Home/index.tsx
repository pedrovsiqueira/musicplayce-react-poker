import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import musicPlayceLogo from "../../assets/musicPlayceLogo.svg";
import Button from "../../components/Button/";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <figure>
          <img src={musicPlayceLogo} alt="Music Playce Logo" />
        </figure>
        <h1>MusicPlayce Poker Game</h1>
        <section>
          <Link to="/poker">
            <Button>play</Button>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://a1s.unicdn.net/polopoly_fs/1.696321.1585232084!/image/1470891313.jpg"
          >
            <Button>rules</Button>
          </a>
        </section>
      </Content>
    </Container>
  );
};

export default Home;
