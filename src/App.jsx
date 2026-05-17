import "./App.css";
import Car from "./components/Car";
import Bike from "./components/Bike";

const cars = [{
  id: 1,
  name: "Mercedes",
  color: "black",
}, {
  id: 2,
  name: "BMW",
  color: "white",
}, {
  id: 3,
  name: "Audi",
  color: "red"
}, {
  id: 4,
  name: "Toyota",
  color: "blue"}]

function App() {

  // function renderCars(car, index) {
  //   return <Car car={car} key={index}/>
  // }


  const handleClick = (e) => {
   
    console.log("Button clicked");
     console.log(e);
  }

  const handleChange = (e) => {
    console.log("Input changed");
    console.log(e.target.value);
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>

      <input type="text" onChange={handleChange}/>
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
