import React from "react";
import Card from "./Card";
import styled from "styled-components";
import cardData, { CardData } from "../assets/cardData.ts";
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const Cards: React.FC = () => {
  return (
    <CardsContainer>
      {cardData.map((card: CardData) => (
        <Card
          key={card.cardID}
          cardImg={card.cardImg}
          cardID={card.cardID}
          cardDesc={card.cardDesc}
        />
      ))}
    </CardsContainer>
  );
};

export default Cards;
