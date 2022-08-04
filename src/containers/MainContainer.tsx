//@ts-ignore
import main_background from "../assets/images/home/background-home-desktop.jpg";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="background-image">
        <img src={main_background} alt="" />
      </div>
    </div>
  );
};

export { MainContainer };
