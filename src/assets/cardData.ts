// cardData.js
export interface CardData {
  cardID: string;
  cardImg: string;
  cardDesc: string;
}

const cardData = [
  {
    cardID: "1",
    cardImg: "./images/image1.png",
    cardDesc: "Counter",
  },
  {
    cardID: "2",
    cardImg: "",
    cardDesc: "Description for Card 2",
  },
  {
    cardID: "3",
    cardImg: "",
    cardDesc: "Description for Card 3",
  },
  {
    cardID: "4",
    cardImg: "",
    cardDesc: "Description for Card 4",
  },
];

export default cardData;
