import { NavLink } from "react-router-dom";
import { useState } from "react";
//@ts-ignore
import logo from "../assets/images/shared/logo.svg";

const Navbar = () => {
  const [Indication, setIndication] = useState(0);
  const [WidthIndication, setWidthIndication] = useState(75);

  const MoveIndicator = (id: string) => {
    let elem = document.getElementById(id);
    var left = elem.offsetLeft - 88;
    setIndication(left);
    var width = elem.offsetWidth - 45;
    setWidthIndication(width);
  };

  return (
    <div className="header">
      <img className="logo-image" src={logo} alt="" />
      <div className="navbar">
        <nav>
          <ul>
            <li id="text-home" onClick={() => MoveIndicator("text-home")}>
              <NavLink className={"nameLink"} to="/">
                <span> 00 </span>
                <p>HOME</p>
              </NavLink>
            </li>
            <li
              id="text-destination"
              onClick={() => MoveIndicator("text-destination")}
            >
              <NavLink className={"nameLink"} to="/destination">
                <span> 01 </span>
                <p>DESTINATION</p>
              </NavLink>
            </li>
            <li id="text-crew" onClick={() => MoveIndicator("text-crew")}>
              <NavLink className={"nameLink"} to="/crew">
                <span> 02 </span>
                <p>CREW</p>
              </NavLink>
            </li>
            <li
              id="text-technology"
              onClick={() => MoveIndicator("text-technology")}
            >
              <NavLink className={"nameLink"} to="/technology">
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
