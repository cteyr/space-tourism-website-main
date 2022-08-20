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
      <div className="right-container">
        <div className="text-container">
          <div className="navBar">
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </div>
          <div className="body-text">
            <div className="name-planet">
               <p>{destinationData[0][1].name}</p>
            </div>
              <p>{destinationData[0][1].description}</p>
          </div>
          <hr />
          <div className="footer-text">
            <div className="avg-distance"> <p className="tittle">AVG. DISTANCE</p> <p>{destinationData[0][1].distance}</p></div>
            <div className="est-travel"><p className="tittle">EST. TRAVEL TIME</p> <p>{destinationData[0][1].travel}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export { Destination };
