import "./App.css";
import Car from "./components/Car";
import Bike from "./components/Bike";

function App() {
  return (
    <>
      <Car
        car={{
          name: "Mercedes",
          color: "black",
        }}
      />
      <Car
        car={{
          name: "BMW",
          color: "white",
        }}
      />
      <Bike bikeName="Honda" bikeColor="green" />
      <Bike bikeName="Yamaha" bikeColor="red" />
      <Bike />
    </>
  );
}

export default App;
