import React from "react";
import styles from "styled-components";

const Title = styles.h3`
  font-size: 1.75rem;
  max-width: 80%;
`;

const Date = styles.p`
  font-size: 1.5rem;
  margin: 0;
`;

const Info = styles.p`
  font-size: 1.5rem;
  max-width: 80%;
  text-align: justify;
`;

const Explanation = props => {
  if (!props.title) return <Title>Loading...</Title>;

  return (
    <>
      <Title className="title">{props.title}</Title>
      <Date>{props.date}</Date>
      <Info>{props.explanation}</Info>
    </>
  );
};

export default Explanation;
