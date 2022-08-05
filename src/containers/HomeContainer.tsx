//@ts-ignore
import home_background from "../assets/images/home/background-home-desktop.jpg";

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <div className="background-image">
        <img src={home_background} alt="" />
      </div>
      <div className="mainContainer">
        <div className="left-container">
          <div className="text-container">
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export { HomeContainer };
