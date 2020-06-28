import React, { useEffect, useState } from "react";
import axios from "axios";

interface ICardsProp {
  code: string;
  image: string;
  value: string;
  suit: string;
}

const Poker: React.FC = () => {
  const [playerOneCards, setPlayerOneCards] = useState<ICardsProp[]>([]);
  const [playerTwoCards, setPlayerTwoCards] = useState<ICardsProp[]>([]);

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/draw/?count=10")
      .then((resp) => {
        setPlayerOneCards(resp.data.cards.slice(0, 5));
        setPlayerTwoCards(resp.data.cards.slice(5, 10));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("this is playerOne cards", playerOneCards);
  console.log("this is playerTwo cards", playerTwoCards);
  return <div>This is my poker page</div>;
};

export default Poker;
