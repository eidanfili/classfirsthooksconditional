import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // const conditional = () => {
  //   if (count <= -9) {
  //     document.querySelector(".btn-dwn").disabled = true;
  //   } else if (count >= -10) {
  //     document.querySelector(".btn-dwn").disabled = false;
  //   }
  //   if (count <= 9) {
  //     document.querySelector(".btn-up").disabled = false;
  //   } else if (count >= 10) {
  //     document.querySelector(".btn-up").disabled = true;
  //   }
  // };
  const isPositiveOrNot = () => {
    if (count < 0) {
      return <div>your element is negative</div>;
    } else {
      return <div>your element is positive</div>;
    }
  };

  const bouncer = () => {
    if (name.toLowerCase() === "eidan") {
      return <div>omg the mvp</div>;
    } else if (name.toLowerCase() === "something cool") {
      return <div>sure get in</div>;
    } else {
      return <div>get out</div>;
    }
  };

  return (
    <div className="App">
      <h1>You clicked {count} times</h1>
      <button className="btn-up" onClick={() => setCount(count + 1)}>
        Click me to go up
      </button>
      <button className="btn-dwn" onClick={() => setCount(count - 1)}>
        Click me to go down
      </button>
      {/* {conditional()} */}
      {isPositiveOrNot()}

      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      {bouncer()}
    </div>
  );
}

export default App;
