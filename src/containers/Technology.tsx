//@ts-ignore
import launch_vehicle_portrait from "../assets/images/technology/image-launch-vehicle-portrait.jpg";

const Technology = () => {
  return <div className="technologyContainer">
    <div className="mainContainer">
        <div className="left-container">
          <div className="text-container">
            <div className="tittle-container"><p><span>03</span>SPACE LAUNCH 101</p>
            </div>
            <div className="bodyText-container">
              <div className="navBar">
                <div className="circle"><p>1</p></div>
                <div className="circle"><p>2</p></div>
                <div className="circle"><p>3</p></div>
              </div>
              <div className="info-text-container">
                  <div className="tittle"><p>THE TERMINOLOGY...</p></div>
                  <div className="nameVehicle"><p>LAUNCH VEHICLE</p></div>
                  <div className="description"><p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p></div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="right-container">
          <div className="imageTechnology">
            <img src={launch_vehicle_portrait} alt="" />
          </div>
        </div>
    </div>
  </div>;
};

export { Technology };
