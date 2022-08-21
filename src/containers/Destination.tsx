import { useState } from "react";
import dataJson from "../data.json"

const Destination = () => {
  const [moveIndication, setMoveIndication] = useState(0);
  const [WidthIndication, setWidthIndication] = useState(53);
  const [imageDestination, setImageDestination] = useState("Moon");
  const [destinationData,setdestinationData]= useState([dataJson.destinations]);
  const [numPlanet, setNumPlanet]= useState(0);
  

  const MoveIndicator = (nameLink: string) => {
    if(nameLink==="Moon"){
      setNumPlanet(0);
    }else if(nameLink==="Mars"){
      setNumPlanet(1);
    }else if(nameLink=="Europa"){
      setNumPlanet(2);
    }else{
      setNumPlanet(3);
    }
    setImageDestination(nameLink);
    let elem = document.getElementById(nameLink);
    var left = elem.offsetLeft;
    setMoveIndication(left);
    var width = elem.offsetWidth;
    setWidthIndication(width);
  };
  
  return <div className="destinationContainer">
    <div className="mainContainer">
      <div className="left-container">
        <div className="text-container"><p><span>01</span>PICK YOUR DESTINATION</p>
        <div className={`imageDestination-${imageDestination}`}></div>
        </div>
      </div>
      <div className="right-container">
        <div className="text-container">
          <div className="navBar">
            <ul>
              <li id="Moon" onClick={() => MoveIndicator("Moon")}>MOON</li>
              <li id="Mars" onClick={() => MoveIndicator("Mars")}>MARS</li>
              <li id="Europa" onClick={() => MoveIndicator("Europa")}>EUROPA</li>
              <li id="Titan" onClick={() => MoveIndicator("Titan")}>TITAN</li>
            </ul>
            <div className="indicador" style={{
              transform: `translate(${moveIndication}px)`,
              width: `${WidthIndication}px`,
            }}></div>
          </div>
          <div className="body-text">
            <div className="name-planet">
               <p>{destinationData[0][numPlanet].name}</p>
            </div>
              <p>{destinationData[0][numPlanet].description}</p>
          </div>
          <hr />
          <div className="footer-text">
            <div className="avg-distance"> <p className="tittle">AVG. DISTANCE</p> <p>{destinationData[0][numPlanet].distance}</p></div>
            <div className="est-travel"><p className="tittle">EST. TRAVEL TIME</p> <p>{destinationData[0][numPlanet].travel}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export { Destination };
