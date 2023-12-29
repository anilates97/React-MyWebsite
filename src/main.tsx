import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsDetail from "./features/Projects/ProjectsDetail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/projectDetail/:id" element={<ProjectsDetail />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
