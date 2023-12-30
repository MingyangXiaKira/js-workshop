// WorkDetail1.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import React_v from "./types/React_v";
import Ts_v from "./types/Ts_v";
import HomeIcon from "@mui/icons-material/Home";
import { FaReact } from "react-icons/fa";
import { Button } from "@mui/material";
import { SiTypescript } from "react-icons/si";
import styled from "styled-components";
const WorkDetail1: React.FC = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;
  const ButtonContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
  `;
  const TypeContainer = styled.div`
    display: flex;
    gap: 15px;
  `;
  const Playground = styled.div`
    flex: 15;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const [viewMode, setViewMode] = useState<"react" | "ts">("react");
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonContainer>
        <Button startIcon={<HomeIcon />} onClick={() => navigate("/")}>
          Home
        </Button>
        <TypeContainer>
          <Button startIcon={<FaReact />} onClick={() => setViewMode("react")}>
            React
          </Button>
          <Button
            startIcon={<SiTypescript />}
            onClick={() => setViewMode("ts")}
          >
            TypeScript
          </Button>
        </TypeContainer>
      </ButtonContainer>
      <Playground>{viewMode === "react" ? <React_v /> : <Ts_v />}</Playground>
    </Container>
  );
};

export default WorkDetail1;
