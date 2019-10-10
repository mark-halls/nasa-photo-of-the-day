import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import Header from "./components/Header";
import Explanation from "./components/Explanation";
import BigImage from "./components/BigImage";
import PreviousImages from "./components/PreviousImages";

import "./App.css";

const myKey = "DEMO_KEY";

function App() {
  // 7 days worth of image data
  const [images, setImages] = useState({});
  const [imageIndex, setImageIndex] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
      .then(res => setImages(res.data));
  }, []);

  return (
    <div className="App">
      <Header />
      <BigImage source={images.hdurl} />
      <Explanation
        explanation={images.explanation}
        title={images.title}
        date={images.date}
      />
    </div>
  );
}

export default App;
