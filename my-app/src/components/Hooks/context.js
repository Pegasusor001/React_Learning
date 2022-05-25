import React, { useState, useEffect, useRef, useContext } from "react";

const Context = React.createContext();

// Example 1: Context.provider & Context.consumer
// Context.provider: feed date in provider
// Context.consumer: retrive data from consumer
const ContextLevel1 = () => {
  return (
    <header className="App-header">
      <Context.Provider value={{ x: 1, y: 2 }}>
        <h2>This is a Context Level 1</h2>
        <ContextLevel2 />
        <ContextLevel4 />
      </Context.Provider>
    </header>
  );
};

const ContextLevel2 = () => {
  return (
    <>
      <h2>This is a Context Level 2</h2>
      <ContextLevel3 />
    </>
  );
};

const ContextLevel3 = () => {
  return (
    <Context.Consumer>
      {({ x }) => {
        return (
          <>
            <h2>This is a Context Level 3, use Context.Consumer to retrive data</h2>
            <p>the Pass in value X: {x}</p>
          </>
        );
      }}
    </Context.Consumer>
  );
};

const ContextLevel4 = () => {
  const { x, y } = useContext(Context);
  return (
    <div>
      <h2>This is a Context Level 4, use useContext to retrive data</h2>
      <p>X Value: {x}, Y Value: {y}</p>
    </div>
  );
};

export { ContextLevel1 };
