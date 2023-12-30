// cardData.js
export interface CardData {
  cardID: string;
  cardImg: string;
  cardDesc: string;
}

const cardData = [
  {
    cardID: "1",
    cardImg: "public/image1.png",
    cardDesc: "Counter",
  },
  {
    cardID: "2",
    cardImg: "/path/to/image2.jpg",
    cardDesc: "Description for Card 2",
  },
  {
    cardID: "3",
    cardImg: "/path/to/image2.jpg",
    cardDesc: "Description for Card 3",
  },
  {
    cardID: "4",
    cardImg: "/path/to/image2.jpg",
    cardDesc: "Description for Card 4",
  },
];

export default cardData;
