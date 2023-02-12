import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CSVPage from "./pages/CSVPage/CSVPage";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <CSVPage />
    </div>
  );
}

export default App;
