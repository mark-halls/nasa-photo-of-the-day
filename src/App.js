import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import Header from "./components/Header";
import Explanation from "./components/Explanation";
import BigImage from "./components/BigImage";
import PreviousImages from "./components/PreviousImages";

import "./App.css";

// const myKey = "DEMO_KEY";

function App() {
  // 7 days worth of image data
  const [images, setImages] = useState({});
  const [imageIndex, setImageIndex] = useState("");

  useEffect(() => {
    const setImageState = async () => {
      const data = {};

      // add 7 days worth of empty objects
      for (let i = 0; i < 7; i++) {
        const day = moment()
          .subtract(i, "days")
          .format("YYYY-MM-DD");
        data[day] = {};
      }

      // loop over data to get image data from api
      await Object.keys(data).forEach(day => {
        axios
          .get(
            `https://api.nasa.gov/planetary/apod?date=${day}&api_key=${myKey}`
          )
          .then(res => {
            data[day] = res.data;
          });
      });

      const index = Object.keys(data)
        .sort()
        .reverse()[0];

      data["imageIndex"] = index;

      setImages(data);
    };
    setImageState();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
  //     .then(res => setImages(res.data));
  // }, []);

  return (
    <div className="App">
      <Header />
      <BigImage source={images.hdurl} />
      <Explanation
        explanation={images.explanation}
        title={images.title}
        date={images.date}
        test={console.log(images[images.imageIndex])}
      />
      {/* <PreviousImages images={images} /> */}
    </div>
  );
}

export default App;
