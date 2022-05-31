import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TypeState from "./routes/type-state";
import Jsx from "./routes/jsx";
import PropElement from "./routes/props";
import "./index.css";
import StateType from "./routes/state";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/type-state" element={<TypeState />} />
      <Route path="/jsx" element={<Jsx />} />
      <Route path="/props" element={<PropElement />} />
      <Route path="/state" element={<StateType />} />
    </Routes>
  </BrowserRouter>
);
