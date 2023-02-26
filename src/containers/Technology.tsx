import {useState, useEffect, useReducer } from "react";
import dataJson from "../data.json";

//@ts-ignore
import launch_vehicle_portrait from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
//@ts-ignore
import spaceport_portrait from "../assets/images/technology/image-spaceport-portrait.jpg";
//@ts-ignore
import space_capsule_portrait from "../assets/images/technology/image-space-capsule-portrait.jpg";

const initialState = {
  number1: "selected",
  number2: "number2",
  number3: "number3",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "number1":
      return {
        number1: "selected",
        number2: "number2",
        number3: "number3",
      };
    case "number2":
      return {
        number1: "number1",
        number2: "selected",
        number3: "number3",
      };
    case "number3":
      return {
        number1: "number1",
        number2: "number2",
        number3: "selected",
      };
  }
  return state;
};

const Technology = () => {
  const [technologyData]= useState([dataJson.technology]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numberTechnology, setNumberTechnology]=useState(0);
  const [Technology, setTechnology]=useState(localStorage.getItem("Technology")?localStorage.getItem("Technology"):"launch_vehicle_portrait");
  
  useEffect(() => {
    if(Technology=="launch_vehicle_portrait"){
      setNumberTechnology(0);
      dispatch({ type: `number1` });
      setTechnology(launch_vehicle_portrait);
    }else if(Technology=="spaceport_portrait"){
      setNumberTechnology(1);
      dispatch({ type: `number2` });
      setTechnology(spaceport_portrait);
    }else if(Technology=="space_capsule_portrait"){
      setNumberTechnology(2);
      dispatch({ type: `number3` });
      setTechnology(space_capsule_portrait);
    }

  },[]);


  const changeTechnology=(number:string)=>{
    dispatch({ type: `${number}` });
    if(number=="number1"){
      setNumberTechnology(0);
      setTechnology(launch_vehicle_portrait);
      localStorage.setItem("Technology", "launch_vehicle_portrait");
    }else if(number=="number2"){
      setNumberTechnology(1);
      setTechnology(spaceport_portrait);
      localStorage.setItem("Technology", "spaceport_portrait");
    }else if(number=="number3"){
      setNumberTechnology(2);
      setTechnology(space_capsule_portrait);
      localStorage.setItem("Technology", "space_capsule_portrait");
    }
  }


  return <div className="technologyContainer">
    <div className="mainContainer">
        <div className="left-container">
          <div className="text-container">
            <div className="tittle-container"><p><span>03</span>SPACE LAUNCH 101</p>
            </div>
            <div className="bodyText-container">
              <div className="navBar">
                <div className={`circle ${state.number1}`} onClick={()=>changeTechnology("number1")}><p>1</p></div>
                <div className={`circle ${state.number2}`} onClick={()=>changeTechnology("number2")}><p>2</p></div>
                <div className={`circle ${state.number3}`} onClick={()=>changeTechnology("number3")}><p>3</p></div>
              </div>
              <div className="info-text-container">
                  <div className="tittle"><p>THE TERMINOLOGY...</p></div>
                  <div className="nameVehicle"><p>{technologyData[0][numberTechnology].name}</p></div>
                  <div className="description"><p>{technologyData[0][numberTechnology].description}</p></div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="right-container">
          <div className="tittle2"><p><span>03</span>SPACE LAUNCH 101</p></div>
          <div className="imageTechnology">
            <img src={Technology} alt="" />
          </div>
        </div>
    </div>
  </div>;
};

export { Technology };
