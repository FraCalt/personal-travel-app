import React from "react";
import data from "../mocData/data"
import Card from "./Card";

const Hero = () => {
    const cards= data.map((element,key)=>(
        <Card key={key} {...element}/>
    ))
  return (
    <div className="hero--section">
      {cards}
    </div>
  );
};

export default Hero;
