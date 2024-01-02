import React from "react";
import CustomNavBar from "../../features/Navbar/Navbar";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../../features/Banner/Banner";
import Skills from "../../features/Skills/Skills";
import Projects from "../../features/Projects/Projects";
import Contact from "../../features/Contact/Contact";
import Footer from "../../features/Footer/Footer";

function Home() {
  return (
    <div className="App">
      <CustomNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
