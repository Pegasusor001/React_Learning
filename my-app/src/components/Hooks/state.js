// useState, useEffect, and hook basics

import React, { useState, useEffect } from "react";
import {useCount, useMutableObj} from "../../customerHooks/setState";

const StateStudy1 = () => {
  const [count, setCount] = useCount(1);
  const [obj, setObj] = useMutableObj(1, 2, 3 );
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>State Fundamental</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count: {count}
        </button>

        {/* // 对于 mutable Object，不要使用如下，不会发生 Rerender
            // obj.a += 1
            // setObj(obj) */}
        <button
          onClick={() => {
            setObj({...obj, a: obj.a + 1, b: obj.b + 2 });
          }}
        >
          Obj.a: {obj.a}
          <br></br>
          Obj.b: {obj.b}
          <br></br>
          Obj.c: {obj.c}
        </button>
      </header>
    </div>
  );
};

export default StateStudy1;
