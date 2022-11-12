import { MainStudentPage } from "./Components/pages/MainStudentpage";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Components/pages/SignUpPage";
import { Navbar } from "./Components/Navbar";
import { AboutPage } from "./Components/pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <div style={{ marginBottom: "100px" }}>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<MainStudentPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/services" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
