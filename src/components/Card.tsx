import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  margin-bottom: 20px;
`;
const CardImg = styled.img`
  flex: 1;
  max-width: 100px;
  height: auto;
  flex-shrink: 0;
`;
const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  margin-left: 20px;
`;
const CardDesc = styled.p`
  font-size: 26px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
interface CardProps {
  cardImg: string;
  cardID: string;
  cardDesc: string;
}
const Card: React.FC<CardProps> = ({ cardImg, cardID, cardDesc }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/card/${cardID}`);
  };
  return (
    <CardContainer>
      <CardImg src={cardImg} />
      <CardInfo>
        <CardDesc>{cardDesc}</CardDesc>
        <Button variant="outlined" onClick={handleClick}>
          Check
        </Button>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
