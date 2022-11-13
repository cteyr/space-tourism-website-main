import { useEffect, useState } from "react";
import dataJson from "../data.json";

//@ts-ignore
import Moon from "../assets/images/destination/image-moon.png";
//@ts-ignore
import Mars from "../assets/images/destination/image-mars.png";
//@ts-ignore
import Europa from "../assets/images/destination/image-europa.png";
//@ts-ignore
import Titan from "../assets/images/destination/image-titan.png";

const Destination = () => {
  
  const holdMoveIndication = ()=>{
    if(localStorage.getItem("Destination")==="Mars"){
        return 85
    }else if (localStorage.getItem("Destination")==="Europa"){
        return 161
    }else if (localStorage.getItem("Destination")==="Titan"){
        return 255
    }
    return 0
  }

  const widthMoveIndication = ()=>{
    if(localStorage.getItem("Destination")==="Mars"){
        return 44
    }else if (localStorage.getItem("Destination")==="Europa"){
        return 62
    }else if (localStorage.getItem("Destination")==="Titan"){
        return 46
    }
    return 53
  }
  

  const [moveIndication, setMoveIndication] = useState( holdMoveIndication());
  const [WidthIndication, setWidthIndication] = useState(widthMoveIndication());
  const [imageDestination, setImageDestination] = useState(localStorage.getItem("Destination")?localStorage.getItem("Destination"):"Moon");
  const [destinationData]= useState([dataJson.destinations]);
  const [numPlanet, setNumPlanet]= useState(0);

  const MoveIndicator = (namePlanet: string) => {
      setImageDestination(namePlanet);
      let elem = document.getElementById(namePlanet);
      var left = elem.offsetLeft;
      setMoveIndication(left);
      var width = elem.offsetWidth;
      setWidthIndication(width);
      localStorage.setItem("Destination", namePlanet);
  };

  useEffect(() => {
    for (var i = 0; i < destinationData[0].length; i++){
      if(destinationData[0][i].name===imageDestination){
        setNumPlanet(i); 
      }
    }
  },[imageDestination]);
  
  return <div className="destinationContainer">
    <div className="mainContainer">
      <div className="left-container">
        <div className="text-container"><p><span>01</span>PICK YOUR DESTINATION</p>
        <div className={`imageDestination`}>
          {imageDestination ==="Moon"?(
            <img src={Moon} alt="" />
            ):( <></>)}
            {imageDestination ==="Mars"?(
            <img src={Mars} alt="" />
            ):( <></>)}
            {imageDestination ==="Europa"?(
            <img src={Europa} alt="" />
            ):( <></>)}
            {imageDestination ==="Titan"?(
            <img src={Titan} alt="" />
            ):( <></>)}
        </div>
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
              <div className="indicador" style={{
              transform: `translate(${moveIndication}px)`,
              width: `${WidthIndication}px`,
              }}></div>
            </ul>
          </div>
          <div className="body-text">
            <div className="name-planet">
               <p >{destinationData[0][numPlanet].name}</p>
            </div>
              <p >{destinationData[0][numPlanet].description}</p>
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
