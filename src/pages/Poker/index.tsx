import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Content,
  StyledWinnerBox,
  ControlSection,
  ControlButtons,
} from "./styles";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { checkResults } from "../../helpers/checkResults";
import StyledLogo from "../../components/StyledLogo/";

const poker = require("poker-hands");

interface ICardsProp {
  code: string;
  image: string;
  value: string;
  suit: string;
}

const Poker: React.FC = () => {
  const [playerOneCards, setPlayerOneCards] = useState<ICardsProp[]>([]);
  const [playerTwoCards, setPlayerTwoCards] = useState<ICardsProp[]>([]);
  const [results, setResults] = useState("");
  const [winner, setWinner] = useState("");
  const [isRevealed, setIsRevelead] = useState(false);
  const getCards = () => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/draw/?count=10")
      .then((resp) => {
        setPlayerOneCards(resp.data.cards.slice(0, 5));
        setPlayerTwoCards(resp.data.cards.slice(5, 10));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCards();
  }, []);

  const handleCheck = () => {
    const playerOneCodes = playerOneCards.map((item) => item.code).join(" ");
    const playerTwoCodes = playerTwoCards.map((item) => item.code).join(" ");

    const checkWinner = poker.judgeWinner([playerOneCodes, playerTwoCodes]);

    if (checkWinner === 0) {
      setWinner("player one");
      setResults(checkResults(playerOneCodes));
      setIsRevelead(true);
    } else {
      setWinner("player two");
      setResults(checkResults(playerTwoCodes));
      setIsRevelead(true);
    }
  };

  const handleRestart = () => {
    setWinner("");
    setResults("");
    getCards();
    setIsRevelead(false);
  };

  return (
    <Container>
      <Content>
        <section>
          <p>Player One</p>
        </section>
        <Card
          isRevealed={isRevealed}
          playerCards={playerOneCards.map((card) => card.image)}
        />

        <ControlSection>
          <StyledLogo />
          <StyledWinnerBox>
            {winner ? (
              <h1>
                The winner with the best hand is {winner} with: {results}!
              </h1>
            ) : (
              <h1>To reveal the winner, click on the button below!</h1>
            )}
          </StyledWinnerBox>

          <ControlButtons>
            <Link to="/">
              <Button>go back</Button>
            </Link>
            {winner ? (
              <Button onClick={handleRestart}>restart</Button>
            ) : (
              <Button onClick={handleCheck}>play</Button>
            )}
          </ControlButtons>
        </ControlSection>

        <Card
          isRevealed={isRevealed}
          playerCards={playerTwoCards.map((card) => card.image)}
        />
        <section>
          <p id="second-player">Player Two</p>
        </section>
      </Content>
    </Container>
  );
};

export default Poker;
