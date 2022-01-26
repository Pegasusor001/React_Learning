import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Props from "./components/Props/A_Props";
import logo from "./logo.svg";
import API from './components/API/A_API'
import Elements from "./components/Elements/A_Elements";
import Hooks from "./components/Hooks/A_Hooks";
import { RegExp } from "./components/Others/regExp";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Routes>
          <Route path="/props" element={<Props />} />
          <Route path="/api" element={<API />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/regExp" element={<RegExp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
