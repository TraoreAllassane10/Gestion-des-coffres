import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import Coffre from "./pages/Coffre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coffres/:id" element={<Coffre/>} />
      </Routes>
    </Router>
  );
}

export default App;
