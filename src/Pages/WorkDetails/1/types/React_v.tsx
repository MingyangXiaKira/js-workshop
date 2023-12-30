// React_1.tsx
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const React_1: React.FC = () => {
  const [count, setCount] = useState(0);
  const CountBox = styled.div`
    display: flex;
    align-items: center;
  `;
  const Container = styled.div`
    display: flex;
  `;
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <IconButton color="primary" size="large" onClick={decrement}>
        <RemoveIcon />
      </IconButton>
      <CountBox>{count}</CountBox>
      <IconButton color="secondary" size="large" onClick={increment}>
        <AddIcon />
      </IconButton>
    </Container>

    // <div>
    //   <h2>React Counter</h2>
    //   <p>Count: {count}</p>
    //   <button onClick={increment}>+</button>
    //   <button onClick={decrement}>-</button>
    // </div>
  );
};

export default React_1;
