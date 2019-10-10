import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import styled from "styled-components";

import Header from "./components/Header";
import Explanation from "./components/Explanation";
import BigImage from "./components/BigImage";

const myKey = "DEMO_KEY";
// const myKey = "DEMO";

const GlobalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 62.5%;
  background-color: #0b3d91;
  color: white;
  min-height: 100%;
  margin: 0;
  text-align: center;
`;

function App() {
  // 7 days worth of image data
  const [images, setImages] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
      .then(res => setImages(res.data));
  }, []);

  return (
    <GlobalContainer className="App">
      <Header />
      <BigImage source={images.hdurl} />
      <Explanation
        explanation={images.explanation}
        title={images.title}
        date={images.date}
      />
    </GlobalContainer>
  );
}

export default App;
