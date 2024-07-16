import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule/Schedule_New";
import OnProgress from "./component/OnProgress/OnProgress";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/review" element={<OnProgress />} />
        <Route path="/employee" element={<OnProgress />} />
        <Route path="/event" element={<OnProgress />} />
        <Route path="/candidate" element={<OnProgress />} />
        <Route path="/profile" element={<OnProgress />} />
        <Route path="/setting" element={<OnProgress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
