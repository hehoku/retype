import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TypeState from "./routes/type-state";
import Jsx from "./routes/jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/type-state" element={<TypeState />} />
      <Route path="/jsx" element={<Jsx />} />
    </Routes>
  </BrowserRouter>
);
