import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Content, StyledWinnerBox, ControlSection } from "./styles";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { checkResults } from "../../helpers/checkResults";

var poker = require("poker-hands");

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
  };

  return (
    <Container>
      <Content>
        <Card isRevealed={isRevealed} />

        <ControlSection>
          <StyledWinnerBox>
            {winner ? (
              <h1>
                The winner with the best hand is {winner} with: {results}!
              </h1>
            ) : (
              <h1>To reveal the winner, click on the button below!</h1>
            )}
          </StyledWinnerBox>
          {winner ? (
            <Button onClick={handleRestart}>restart</Button>
          ) : (
            <Button onClick={handleCheck}>check</Button>
          )}
        </ControlSection>

        <Card isRevealed={isRevealed} />
      </Content>
    </Container>
  );
};

export default Poker;
