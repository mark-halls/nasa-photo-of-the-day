import React from "react";
const BigImage = props => {
  if (!props.source) return <p>Loading...</p>;

  return <img src={props.source} />;
};

export default BigImage;
