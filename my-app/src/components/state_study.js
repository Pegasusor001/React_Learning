import React, {useState, useEffect, useRef} from 'react';
import logo from '../logo.svg';
import useCount from '../hooks/setState'

function StateCount() {
  const [count, setCount] = useCount(0);
  useEffect(() => {
    document.title = `count = ${count}`
    return document.title = `count = ${count+1}`
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => {setCount(count+1)}}>
          {count}
        </button>
      </header>
    </div>
  );
}

export default StateCount