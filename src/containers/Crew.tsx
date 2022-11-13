import {useState, useEffect, useReducer } from "react";
import dataJson from "../data.json"

//@ts-ignore
import ansari from "../assets/images/crew/image-anousheh-ansari.png";
//@ts-ignore
import hurley from "../assets/images/crew/image-douglas-hurley.png";
//@ts-ignore
import shuttleworth from "../assets/images/crew/image-mark-shuttleworth.png";
//@ts-ignore
import glover from "../assets/images/crew/image-victor-glover.png";


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
  const [Character, setCharacter]= useState(localStorage.getItem("Character")?localStorage.getItem("Character"):"ansari");
  const [numCharacter, setNumCharacter]= useState(3);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [crewData]= useState([dataJson.crew]);

  useEffect(() => {
    if(Character=="ansari"){
      setCharacter(ansari)
      dispatch({ type: `character4` });
      setNumCharacter(3);
    }else if(Character=="glover"){
      setCharacter(glover)
      dispatch({ type: `character1` });
      setNumCharacter(0);
    }else if(Character=="shuttleworth"){
      setCharacter(shuttleworth)
      dispatch({ type: `character2` });
      setNumCharacter(1);
    }else{
      setCharacter(hurley)
      dispatch({ type: `character3` });
      setNumCharacter(2);
    }
    
  },[]);

  const clickCharacter= (character:string)=>{
    dispatch({ type: `${character}` });
    if(character=="character1"){
      setCharacter(glover)
      setNumCharacter(0);
      localStorage.setItem("Character", "glover");
    }else if(character=="character2"){
      setCharacter(shuttleworth)
      setNumCharacter(1);
      localStorage.setItem("Character", "shuttleworth");
    }else if(character=="character3"){
      setCharacter(hurley)
      setNumCharacter(2);
      localStorage.setItem("Character", "hurley");
    }else {
      setCharacter(ansari)
      setNumCharacter(3);
      localStorage.setItem("Character", "ansari");
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
              <div className="profesion"><p>{crewData[0][numCharacter].role}</p></div>
              <div className="name-people">{crewData[0][numCharacter].name}</div>
              <div className="bio-people">{crewData[0][numCharacter].bio}</div>
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
            <img src={Character} alt="" />
          </div>
        </div>
      </div>
  </div>
  )
};

export { Crew };
