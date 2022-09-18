//@ts-ignore
import ansari from "../assets/images/crew/image-anousheh-ansari.png";
//@ts-ignore
import hurley from "../assets/images/crew/image-douglas-hurley.png";
//@ts-ignore
import shuttleworth from "../assets/images/crew/image-mark-shuttleworth.png";
//@ts-ignore
import glover from "../assets/images/crew/image-victor-glover.png";

import {useState } from "react";
import dataJson from "../data.json"
import { useReducer } from "react";

const initialState = {
  character1: "character1",
  character2: "character2",
  character3: "character3",
  character4: "selected",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "character1":
      return {
        character1: "selected",
        character2: "character2",
        character3: "character3",
        character4: "character4",
      };
    case "character2":
      return {
        character1: "character1",
        character2: "selected",
        character3: "character3",
        character4: "character4",
      };
    case "character3":
      return {
        character1: "character1",
        character2: "character2",
        character3: "selected",
        character4: "character4",
      };
    case "character4":
      return {
        character1: "character1",
        character2: "character2",
        character3: "character3",
        character4: "selected",
      };
  }
  return state;
};

const Crew = () => {
  const [Avatar, setAvatar]= useState(ansari)
  const [state, dispatch] = useReducer(reducer, initialState);
  const [crewData]= useState([dataJson.crew]);

  const clickCharacter= (character:string)=>{
    dispatch({ type: `${character}` });
    if(character=="character1"){
      setAvatar(glover)
    }else if(character=="character2"){
      setAvatar(shuttleworth)
    }else if(character=="character3"){
      setAvatar(hurley)
    }else {
      setAvatar(ansari)
    }
  }

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
              <div className="navBar">
                <div className={`${state.character1} circle`} onClick={()=>clickCharacter("character1")}></div>
                <div className={`${state.character2} circle`} onClick={()=>clickCharacter("character2")}></div>
                <div className={`${state.character3} circle`} onClick={()=>clickCharacter("character3")}></div>
                <div className={`${state.character4} circle`} onClick={()=>clickCharacter("character4")}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="imagePesonage">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
  </div>
  )
};

export { Crew };
