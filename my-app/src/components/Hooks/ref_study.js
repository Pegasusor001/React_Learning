// ref 常用场景：访问DOM节点，对管理聚焦，选中动画
// useRef: ref的hook

import React, { useRef, forwardRef } from "react";

// Example 1: useRef Basic: used to select a DOM
// Ref.current 指向 <input/> 被赋予 ref 的这个DOM 节点
const RefStudy1 = function (params) {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} value="input with Ref" />
      <button onClick={onClick}>Focus Parent</button>
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
      <button onClick={onClick}>Focus Child</button>
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
      <RefChild ref={inputRef} />
      <button onClick={onClick}>Focus Parent</button>
    </div>
  );
};

export { RefStudy1, RefStudy2 };
