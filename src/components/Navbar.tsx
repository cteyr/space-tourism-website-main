import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
//@ts-ignore
import logo from "../assets/images/shared/logo.svg";

const Navbar = () => {
  const [Indication, setIndication] = useState(0);
  const [WidthIndication, setWidthIndication] = useState(75);
  

  useEffect(() => {
    console.log("hola");
  }, );

  const MoveIndicator = (nameLink: string) => {
    let elem = document.getElementById(nameLink);
    var left = elem.offsetLeft;
    setIndication(left);
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
            <li id="text-home">
              <NavLink
                className={"nameLink"}
                to="/"
                onClick={() => MoveIndicator("text-home")}
              >
                <span> 00 </span>
                <p>HOME</p>
              </NavLink>
            </li>
            <li id="text-destination">
              <NavLink
                className={"nameLink"}
                to="/destination"
                onClick={() => MoveIndicator("text-destination")}
              >
                <span> 01 </span>
                <p>DESTINATION</p>
              </NavLink>
            </li>
            <li id="text-crew">
              <NavLink
                className={"nameLink"}
                to="/crew"
                onClick={() => MoveIndicator("text-crew")}
              >
                <span> 02 </span>
                <p>CREW</p>
              </NavLink>
            </li>
            <li id="text-technology">
              <NavLink
                className={"nameLink"}
                to="/technology"
                onClick={() => MoveIndicator("text-technology")}
              >
                <span> 03 </span>
                <p>TECHNOLOGY</p>
              </NavLink>
            </li>
          </ul>
          <span
            className="indicador"
            style={{
              transform: `translate(${Indication}px)`,
              width: `${WidthIndication}px`,
            }}
          ></span>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
