import { BikeWheels } from "./Wheels";

export default function Bike({ bikeName = "Unknown Bike", bikeColor = "Unknown Color" }) {
  //   //   const bikeName = "Honda";
  //   const bikeColor = "red";

  // const { bikeName, bikeColor } = props;

  // const bikeName = props.bikeName
  // const bikeColor = props.bikeColor


  return (
    <div>
      <h1>Bike component</h1>
      <h2>{bikeName}</h2>
      <p>It is {bikeColor}</p>
      {bikeName === "Honda" && <p>This is a Honda bike</p>}
      <BikeWheels />
    </div>
  );
}

// export default Bike;
