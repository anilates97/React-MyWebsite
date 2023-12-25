import React from "react";
import CustomNavBar from "./features/Navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./features/Banner/Banner";

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Banner />
    </div>
  );
}

export default App;
