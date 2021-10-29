import React from 'react';
import logo from './logo.svg';
import './App.css';

import {TextField} from './component/TextField'
// import { Counter } from './component/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text='hello' obj={{firstname:"Lun", lastname: "Ji"}}/>
    </div>
  );
}

export default App;
