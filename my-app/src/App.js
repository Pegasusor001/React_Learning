import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import { RefStudy1, RefStudy2 } from "./components/ref_study";
import MemoStudy from "./components/memo_study";
import StateStudy1 from "./components/state_study";
import {
  Composition,
  CompositionFunction,
} from "./components/composition_study"; // props.Children
import AMchart from "./components/AMchart/AMchart";
import MultiLine from "./components/AMchart/MultiLine";

function App() {
  return (
    <div className="App">
      <MemoStudy />
      <StateStudy1 />
      <RefStudy1 />
      <AMchart />
      <MultiLine />
      <Composition />
      <CompositionFunction />
    </div>
  );
}

export default App;
