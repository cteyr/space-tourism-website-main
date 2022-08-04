import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="layout">
      <div className="layout_header">
        <Navbar />
      </div>
      <div className="layout_main-content">
        <Outlet />
      </div>
    </div>
  );
};
export { MainLayout };
