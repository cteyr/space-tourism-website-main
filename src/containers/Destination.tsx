import exports from "webpack";
//@ts-ignore
import destination_background from "../assets/images/destination/background-destination-desktop.jpg";
const Destination = () => {
  return (
    <div className="destinationContainer">
      <div className="background-image">
        <img src={destination_background} alt="" />
      </div>
    </div>
  );
};

export { Destination };
