import React, {useState, useEffect, useRef} from 'react';
import './App.css';

import RefStudy from './components/ref_study'
import StateCount from './components/state_study'

function App() {
  return (
    <div className="App">
        <StateCount/>
        <RefStudy/>
    </div>
  );

}

export default App;
