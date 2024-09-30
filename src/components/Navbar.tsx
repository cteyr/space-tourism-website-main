import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNavegateHeader } from "../feature/navegateSlice/navegateSliceHeader";
import { RootState } from '../types/types';

//@ts-ignore
import logo from "../assets/images/shared/logo.svg";  

const Navbar = () => {
  const dispatch = useDispatch();
  const navegateHeader = useSelector((state:RootState) => state.navegateHeader);

  const pageWidth  = document.documentElement.scrollWidth;
  const getWidth=(url:string)=>{
    if(url.includes("/destination")){
      if(pageWidth<=768){
        return 89;
      }
    return  126;
    }else if(url.includes("/crew")){
      if(pageWidth<=768){
        return 38;
      }
    return  69;
    }else if(url.includes("/technology")){
      if(pageWidth<=768){
        return 92;
      }
    return  132;
    }else{
        if(pageWidth<=768){
          return 41;
        }
      return  72;
      }
  }

  const getIndication=(url:string)=>{
    const pageWidth  = document.documentElement.scrollWidth;
    if(url.includes("/destination")){
      if(pageWidth<=768){
        return 73;
      }
      return 128;
    }else if(url.includes("/crew")){
      if(pageWidth<=768){
        return 194;
      }
      return 311;
    }else if(url.includes("/technology")){
      if(pageWidth<=768){
        return 264;
      }
     return 436;
    }else{
      if(pageWidth<=768){
        return 0;
      }
      return 0;
    }
  }

  const [moveIndication, setMoveIndication] = useState(getIndication(window.location.toString()));
  const [WidthIndication, setWidthIndication] = useState(getWidth(window.location.toString()));

  const MoveIndicator = (nameLink: string) => {
    dispatch(changeNavegateHeader(nameLink))
    let elem = document.getElementById(nameLink);
    var left = elem.offsetLeft;
    setMoveIndication(left);
    var width = elem.offsetWidth;
    setWidthIndication(width);
  };

  return (
    <div className="header">
      <img className="logo-image" src={logo} alt="" />
      <div className="hamburger"></div>
      <div className="navbar">
        <nav>
          <ul>
            <li id="home">
              <NavLink
                className={"nameLink"}
                to="/"
                onClick={() => MoveIndicator("home")}
              >
                <span> 00 </span>
                <p>HOME</p>
              </NavLink>
            </li>
            <li id="destination">
              <NavLink
                className={"nameLink"}
                to="/destination"
                onClick={() => MoveIndicator("destination")}
              >
                <span> 01 </span>
                <p>DESTINATION</p>
              </NavLink>
            </li>
            <li id="crew">
              <NavLink
                className={"nameLink"}
                to="/crew"
                onClick={() => MoveIndicator("crew")}
              >
                <span> 02 </span>
                <p>CREW</p>
              </NavLink>
            </li>
            <li id="technology">
              <NavLink
                className={"nameLink"}
                to="/technology"
                onClick={() => MoveIndicator("technology")}
              >
                <span> 03 </span>
                <p>TECHNOLOGY</p>
              </NavLink>
            </li>
          </ul>
          <span
            className="indicador"
            style={{
              transform: `translate(${moveIndication}px)`,
              width: `${WidthIndication}px`,
            }}
          ></span>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
