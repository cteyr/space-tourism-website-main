//@ts-ignore
import ansari from "../assets/images/crew/image-anousheh-ansari.png";
import {useState } from "react";
import dataJson from "../data.json"

const Crew = () => {

  const [crewData]= useState([dataJson.crew]);

  return(
   <div className="crewContainer">
      <div className="mainContainer">
        <div className="left-container">
          <div className="text-container">
            <div className="tittle-container"><p><span>02</span>MEET YOUR CREW</p>
            </div>
            <div className="bodyText-container">
              <div className="profesion"><p>{crewData[0][3].role}</p></div>
              <div className="name-people">{crewData[0][3].name}</div>
              <div className="bio-people">{crewData[0][3].bio}</div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="imagePesonage">
            <img src={ansari} alt="" />
          </div>
        </div>
      </div>
  </div>
  )
};

export { Crew };
