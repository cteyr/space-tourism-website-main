//@ts-ignore
import home_background from "../assets/images/home/background-home-desktop.jpg";

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <div className="background-image">
        <img src={home_background} alt="" />
      </div>
    </div>
  );
};

export { HomeContainer };
