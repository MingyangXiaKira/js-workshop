import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #000000;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
  font-style: italic;
  display: flex;
  align-items: center;
`;
interface HeaderProps {
  logo: string;
}
const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <HeaderContainer>
      <Title>
        <Logo src={logo} />
        Frontend Workshop
        <Logo src={logo} />
      </Title>
    </HeaderContainer>
  );
};

export default Header;
