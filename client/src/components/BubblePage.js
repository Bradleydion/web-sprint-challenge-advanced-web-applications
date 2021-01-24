import React, { useState, useEffect } from "react";
import axios from "axios";
import getColors from "../utils/getColors"


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
  
      getColors()
        .then(res => {
          const colorsArr = res.data;
          setColorList(colorsArr);
        })
        .catch(err => {
          console.log(err.Error);
        })
    }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
