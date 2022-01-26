// useState, useEffect, and hook basics

import React, { useState, useEffect } from "react";
import useCount from "../../hooks/setState";

function StateStudy1() {
  const [count, setCount] = useCount(0);
  useEffect(() => {
    document.title = `count = ${count}`;
    return (document.title = `count = ${count + 1}`);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </header>
    </div>
  );
}

export default StateStudy1;
