// ref 常用场景：访问DOM节点，对管理聚焦，选中动画

import React, {useState, useEffect, useRef, forwardRef} from 'react';

// 如果需要父组件传递Ref，则需要用 forwardRef 对子组件封装
const RefChild = forwardRef((params, inputRef) => {
  const onClick = () => {
    inputRef.current.focus();
  }
  
  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <br/>
      <button onClick={onClick}>Focus Child</button>
    </div>
  ) 
})

// useRef 用来创建一个 可用于传递的 Ref
const RefStudy = function(params) {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.focus();
  }
  return (
    <div>
      <RefChild ref={inputRef}/>
      <button onClick={onClick}>Focus Parent</button>
    </div>
  )
}

export default RefStudy
