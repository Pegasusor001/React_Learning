import React, {useState, useEffect, useRef} from 'react';
import './App.css';

import RefStudy from './components/ref_study'
import MemoStudy from './components/memo_study'
import StateCount from './components/state_study'
import AMchart from './components/AMchart';

function App() {
  return (
    <div className="App">
        {/* <MemoStudy/> */}
        {/* <StateCount/> */}
        {/* <RefStudy/> */}
        <AMchart/>
    </div>
  );
}

export default App;
