import { NavLink } from "react-router-dom";
import { useState } from "react";
//@ts-ignore
import logo from "../assets/images/shared/logo.svg";

const Navbar = () => {
  const [Indication, setIndication] = useState(0);
  const [WidthIndication, setWidthIndication] = useState(66);

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
                <span> 01 </span>
                <p>Home</p>
              </NavLink>
            </li>
            <li
              id="text-destination"
              onClick={() => MoveIndicator("text-destination")}
            >
              <NavLink className={"nameLink"} to="/destination">
                <span> 02 </span>
                <p>Destination</p>
              </NavLink>
            </li>
            <li id="text-crew" onClick={() => MoveIndicator("text-crew")}>
              <NavLink className={"nameLink"} to="/crew">
                <span> 03 </span>
                <p>Crew</p>
              </NavLink>
            </li>
            <li
              id="text-technology"
              onClick={() => MoveIndicator("text-technology")}
            >
              <NavLink className={"nameLink"} to="/technology">
                <span> 04 </span>
                <p>Technology</p>
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
