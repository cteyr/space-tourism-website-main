import { useState } from "react";
import dataJson from "../data.json"
//@ts-ignore

const Destination = () => {
  const [destinationData,setdestinationData]= useState([dataJson.destinations])
  const imageMars=destinationData[0][1];
  
  return <div className="destinationContainer">
    <div className="mainContainer">
      <div className="left-container">
        <div className="text-container"><p><span>01</span>PICK YOUR DESTINATION</p>
        <div className="imageMoon"></div>
        <div className="imageMars"></div>
        <div className="imageEuropa"></div>
        <div className="imageTitan"></div>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  </div>;
};

export { Destination };
