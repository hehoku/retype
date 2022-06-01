import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import TypeState from "./routes/type-state";
import Jsx from "./routes/jsx";
import PropElement from "./routes/props";
import StateType from "./routes/state";
import Toggle from "./routes/event-type";
import LoginControl from "./routes/conditional-render";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/type-state" element={<TypeState />} />
      <Route path="/jsx" element={<Jsx />} />
      <Route path="/props" element={<PropElement />} />
      <Route path="/state" element={<StateType />} />
      <Route path="/event" element={<Toggle />} />
      <Route path="/conditional-render" element={<LoginControl />} />
    </Routes>
  </BrowserRouter>
);
