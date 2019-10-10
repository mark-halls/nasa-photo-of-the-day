import React from "react";
import styled from "styled-components";

const Pic = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1em 4em;
`;

const BigImage = props => {
  if (!props.source) return <p>Loading...</p>;

  return <Pic src={props.source} />;
};

export default BigImage;
