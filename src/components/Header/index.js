import React from "react";
import styled from "styled-components";

const MainHeader = styled.h1`
  margin: 0;
  font-size: 3rem;
  padding: 0.5em;
`;

const Header = props => {
  return <MainHeader className="page-title">NASA Daily Image</MainHeader>;
};

export default Header;
