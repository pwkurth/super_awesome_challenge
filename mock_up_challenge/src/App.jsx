import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
