// ref 常用场景：访问DOM节点，对管理聚焦，选中动画
// useRef: ref的hook

import React, { useRef, forwardRef } from "react";

// Example 1: useRef Basic: used to select a DOM
// Ref.current 指向 <input/> 被赋予 ref 的这个DOM 节点
const RefStudy1 = function (params) {
  const inputRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onClick = () => {
    inputRef.current.focus();
    // inputRef.current 指的就是 <input> tag
  };

  const handleSubmit = event => {
    event.preventefault();
    console.log(usernameRef.current.value, passwordRef.current.value)
  }

  return (
    <div>
      <h1>UseRef - Point to and select a Dom, use the Input as an Example</h1>
      <div>
        <h2>Input Focus after click</h2>
        <input ref={inputRef} value="input with Ref" />
        <button onClick={onClick}>Focus Parent</button>
      </div>
      <div>
        <h2>Get the Input Value</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> User Name</label>
          <input ref={usernameRef} id="username"></input>

          <label htmlFor="password"> Password</label>
          <input ref={passwordRef} id="password"></input>
        </form>
      </div>
    </div>
  );
};

// Example 2: useRef, 父子组件之间的传递：forwardRef
// 如果需要父组件传递Ref，则需要用 forwardRef 对子组件封装
// (params, inputRef) 中 params 不可省略
const RefChild = forwardRef((params, inputRef) => {
  const onClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} value="input with Ref"></input>
      <input type="text" value="input without Ref"></input>
      <br />
      <button onClick={onClick}>Focus Click Child Component</button>
    </div>
  );
});

// useRef 用来创建一个 可用于传递的 Ref
const RefStudy2 = function (params) {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Forward Ref, 一个可以用来传递的Ref</h2>
      <RefChild ref={inputRef} />
      <button onClick={onClick}>Focus Click Parent Component</button>
    </div>
  );
};

export { RefStudy1, RefStudy2 };
