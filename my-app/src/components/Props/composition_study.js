// props.children 以及 用component作为 Props 的使用方法

import React, { useState, useMemo } from "react";
// Example 1: props.children Basic
// Child Component
function CompositionChild(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      <p>Child Component</p>
      {props.children}
    </div>
  );
}

// Parent Component
function Composition() {
  return (
    <CompositionChild color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Parent Component</p>
    </CompositionChild>
  );
}

// Example 2: props.childern as a function, combine Childern with state and setState
// Child Component
function CompositionChildFunction({ children }) {
  const [count, setCount] = useState(0);
  return <div>{children({ count, setCount })}</div>;
}

// Parent Component
function CompositionFunction() {
  return (
    <CompositionChildFunction>
      {({ count, setCount }) => (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </CompositionChildFunction>
  );
}

// Example 3: props.childern as a function, combine Childern with state and setState

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function Splite() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export { Composition, CompositionFunction };
