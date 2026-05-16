import { CarWheels } from "./Wheels";

function Car(props) {
  return (
    <div>
      <h1>Car component</h1>
      <h2>{props.car.name}</h2>
      <p>It is {props.car.color}</p>
      <CarWheels />
    </div>
  );
}

export default Car;
