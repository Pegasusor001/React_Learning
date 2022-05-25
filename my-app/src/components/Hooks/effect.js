// useState, useEffect, and hook basics

import React, { useState, useEffect } from "react";
import {useCount} from "../../customerHooks/setState";

function EffectStudy1() {
  const [count, setCount] = useCount(0);
  useEffect(() => {
    document.title = `count = ${count}`;
    return (document.title = `count = ${count + 1}`);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>UseEffect</h1>
      <h2>每次count改变，修改web page Title</h2>
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

const EffectStudy2 = () => {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    let timer;
    if (!isNaN(time) && time > 0) {
      console.log('set new timer', time);
      timer = setInterval(() => {
        console.log('tick', time);
      }, time);
    }
    // return clear up side effect
    return () => {
      console.log('clear!');
      clearInterval(timer);
    };
  }, [time]);

  console.log('render');

  return (
    <div>
      <h1>Clear Side Effect every time when useEffect is called. 清除之前的Effect</h1>
      <input value={time} onChange={e => setTime(e.target.value)} />
    </div>
  );
};

export {EffectStudy1, EffectStudy2};
