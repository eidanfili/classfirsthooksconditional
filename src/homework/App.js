import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  const conditional = () => {
    if (count < 0) {
      return <div>your element is negative</div>;
    } else {
      return <div>your element is positive</div>;
    }
  };

  return (
    <div className="App">
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me to go up</button>
      <button onClick={() => setCount(count - 1)}>Click me to go down</button>
      {conditional()}
    </div>
  );
}

export default App;
