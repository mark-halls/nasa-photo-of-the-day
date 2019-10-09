import React from "react";

const Explanation = props => {
  if (!props.title) return <h3>Loading...</h3>;

  return (
    <>
      <h3 className="title">{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
    </>
  );
};

export default Explanation;
