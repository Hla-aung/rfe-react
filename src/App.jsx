import "./App.css";
import { useState } from "react";
import Car from "./components/Car";
import Bike from "./components/Bike";
import Counter from "./components/Counter";

const carsArray = [
  {
    id: 1,
    name: "Mercedes",
    color: "black",
  },
  {
    id: 2,
    name: "BMW",
    color: "white",
  },
  {
    id: 3,
    name: "Audi",
    color: "red",
  },
  {
    id: 4,
    name: "Toyota",
    color: "blue",
  },
];

function App() {
  // function renderCars(car, index) {
  //   return <Car car={car} key={index}/>
  // }

  // const handleClick = (e) => {
  //   console.log("Button clicked");
  //   console.log(e);
  // };
  // const [abc, setAbc] = useState("");

  // const handleChange = (e) => {
  //   setAbc(e.target.value);
  // };

  // const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount((n) => n + 1);
  // };

  // const handleDecrease = () => {
  // const decreasedCount = count - 1;
  // setCount(decreasedCount);
  //   setCount((n) => n - 1);
  // };

  // const [person, setPerson] = useState({
  //   name: "John",
  //   age: 30,
  // });

  // const handleIncreaseAge = () => {
  //   setPerson(() => ({
  //     ...person,
  //     age: person.age + 1,
  //   }));
  // };

  // console.log("App component rendered");
  const [cars, setCars] = useState(carsArray);

  const handleAddCar = () => {
    const updatedCars = cars.push({
      name: "BYD",
      color: "Brown",
    });

    setCars(updatedCars);
  };

  console.log(cars);

  return (
    <>
      {cars?.map((c, i) => (
        <Car car={c} key={i} />
      ))}
      <button onClick={handleAddCar}>Add Car</button>
      {/* <h1>Name: {person.name}</h1>
      <h1>Age: {person.age}</h1>

      <button onClick={handleIncreaseAge}>Increase Age</button> */}
      {/* <Counter count={count} />
      <button onClick={handleIncrease}>+ 1</button>
      <button onClick={handleDecrease}>- 1</button> */}
      {/* <button onClick={handleClick}>Click me</button> */}

      {/* <h1>Input value: {abc}</h1>
      <input type="text" onChange={handleChange} /> */}
      {/* {
        cars.filter((car, index) => car.color !== "red").map((car, index) => <Car car={car} key={car.id}/>)
      }
      <Bike bikeName="Honda" bikeColor="green" />
      <Bike bikeName="Yamaha" bikeColor="red" />
      <Bike /> */}
    </>
  );
}

export default App;
