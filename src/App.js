import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function submit() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={submit}>submit</button>
        <h1>{count}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello React
        </a>
      </header>
    </div>
  );
}

export default App;
