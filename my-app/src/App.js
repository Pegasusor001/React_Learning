import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";

import Props from "./components/Props/A_Props";
import API from "./components/API/A_API";
import Elements from "./components/Elements/A_Elements";
import Hooks from "./components/Hooks/A_Hooks";
import { ClassComponent } from "./components/ClassComponent/A_ClassComponent";
import { RegExp } from "./components/Others/regExp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/props" element={<Props />} />
          <Route path="/api" element={<API />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/regExp" element={<RegExp />} />
          <Route path="/ClassComponent" element={<ClassComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
