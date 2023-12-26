import React from "react";
import CustomNavBar from "./features/Navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./features/Banner/Banner";
import Skills from "./features/Skills/Skills";

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
