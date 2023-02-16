import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Modal from "./components/modal/modal";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CSVPage from "./pages/CSVPage/CSVPage";
import Landing from "./pages/Landing/Landing";
import "./index.css";

function App() {
  return (
    <div className="App h-[100vh]  bg-gray-900">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout
                landing={<Landing />}
                about={<About />}
                modal={<Modal />}
              />
            }
          />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
