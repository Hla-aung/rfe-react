import "./App.css";

function App() {
  const total = 5 + 5;
  function sum(x, y) {
    return x + y;
  }
  const student = {
    name: "Mg Mg",
    age: 15,
  };

  const classStudentName = "student-name";
  const style = {
    color: "red",
    fontSize: "16px",
  };

  const num = 1;

  return (
    <>
      <h1 className="">Hello React</h1>
      <div style={style}>{5 * 5}</div>
      <div>{total}</div>
      <div>Total: {sum(5, 6)}</div>
      <div className={classStudentName}>Student name: {student.name}</div>
      <div>Student age: {student.age}</div>
      <div>{num === 1 ? "It's 1" : "It's other number"}</div>
    </>
  );
}

export default App;
