import { useState } from "react";
import "./App.css";

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
  // const [cars, setCars] = useState(carsArray);

  // const handleAddCar = () => {
  //   setCars([
  //     ...cars,
  //     {
  //       name: "BYD",
  //       color: "green",
  //     },
  //   ]);
  // };

  // console.log(cars);

  // console.log(cars);

  // const [firstName, setFirstName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [name, setName] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeUsername = (e) => {
    setError("");
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setError("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "Password123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Welcome admin</p>

          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              value={name.firstName}
              onChange={(e) => {
                setName((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }));
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="middlename">Middle Name</label>
            <input
              type="text"
              id="middlename"
              value={name.middleName}
              onChange={(e) => {
                setName((prev) => ({
                  ...prev,
                  middleName: e.target.value,
                }));
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={name.lastName}
              onChange={(e) => {
                setName((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }));
              }}
              required
            />
          </div>
          <p>{name.firstName + " " + name.middleName + " " + name.lastName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleChangeUsername}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={username.length <= 0 || password.length <= 0}
          >
            Login
          </button>
        </form>
      )}
      {/* {cars?.map((c, i) => (
        <Car car={c} key={i} />
      ))}
      <button onClick={handleAddCar}>Add Car</button> */}
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
