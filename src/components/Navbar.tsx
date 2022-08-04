import { NavLink } from "react-router-dom";
//@ts-ignore
import logo from "../assets/images/shared/logo.svg";
const Navbar = () => {
  return (
    <div className="header">
      <img className="logo-image" src={logo} alt="" />
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink className={"nameLink"} to="/">
                <span> 01 </span> Home
              </NavLink>
            </li>

            <li>
              <NavLink className={"nameLink"} to="/destination">
                <span> 02 </span> Destination
              </NavLink>
            </li>
            <li>
              <NavLink className={"nameLink"} to="/cew">
                <span> 03 </span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink className={"nameLink"} to="/technology">
                <span> 04 </span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
