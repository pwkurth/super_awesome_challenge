import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CSVPage from "./Pages/CSVPage/CSVPage";
import Landing from "./Pages/Landing/Landing";
import "./index.css";

function App() {
  return (
    <div className="App h-[100vh]  bg-gray-900">
      <Router>
        <Routes>
          <Route
            exact
            path="super_awesome_challenge/"
            element={
              <Layout
                landing={<Landing />}
                about={<About />}
                modal={<Modal />}
              />
            }
          />
          <Route
            exact
            path="super_awesome_challenge/home"
            element={<Layout nav={<Navbar />} home={<Home />} />}
          />
          <Route
            exact
            path="super_awesome_challenge/csv"
            element={<Layout nav={<Navbar />} csv={<CSVPage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
