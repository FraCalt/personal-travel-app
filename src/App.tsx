import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
