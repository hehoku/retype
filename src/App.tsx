import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  // add state's type
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/type-state">State Type</Link>
        <Link to="/jsx">JSX Type</Link>
        <Link to="/props">Props Type</Link>
        <Link to="/state">State Type</Link>
        <Link to="/event">Event Type</Link>
      </nav>
    </div>
  );
}

export default App;
