var poker = require("poker-hands");

export const checkResults = (winner: string) => {
  const highestCard = poker.highestCard(winner);
  const hasPair = poker.hasPair(winner);
  const hasTwoPair = poker.hasTwoPairs(winner);
  const hasThreeOfAKind = poker.hasThreeOfAKind(winner);
  const hasStraight = poker.hasStraight(winner);
  const hasFlush = poker.hasFlush(winner);
  const hasFullHouse = poker.hasFullHouse(winner);
  const hasFourOfAKind = poker.hasFourOfAKind(winner);
  const hasStraightFlush = poker.hasStraightFlush(winner);
  const hasRoyalFlush = poker.hasRoyalFlush(winner);

  if (hasRoyalFlush) {
    return "Royal Flush";
  } else if (hasStraightFlush) {
    return "Straight Flush";
  } else if (hasFourOfAKind) {
    return "Four of a kind";
  } else if (hasFullHouse) {
    return "Full house";
  } else if (hasFlush) {
    return "Flush";
  } else if (hasStraight) {
    return "Straight";
  } else if (hasThreeOfAKind) {
    return "Three of a kind";
  } else if (hasTwoPair) {
    return "Two Pairs";
  } else if (hasPair) {
    return "One Pair";
  } else {
    return "Highest Card";
  }
};
