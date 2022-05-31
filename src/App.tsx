import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // add state's type
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/type-state">State's Type</Link>
        <Link to="/jsx">JSX</Link>
      </nav>
    </div>
  );
}

export default App;
