// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

// 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。

import React, { useReducer, useRef } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ReducerStudy1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Pass in 一个 初始State + 一个 Reducer Function
  // dispatch 的 reducer function， take in current state，return 会变成新的 State，
  return (
    <>
      <h1>
        Reducer, useState 的替代方案, 例如 state 逻辑较复杂且包含多个子值{" "}
      </h1>
      <h2>Fundamentals: multiple cases</h2>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

const reducerItem = (state, action) => {
  const { past, present, future } = state;
  switch (action.type) {
    case "ADD":
      return {
        past: [...past, present],
        present: [
          ...present,
          {
            id: Math.random(),
            name: action.value,
          },
        ],
        future: [],
        canUndo: true,
        canRedo: false,
      };
    case "UNDO":
      if (!state.canUndo) return state;

      return {
        present: past[past.length - 1],
        past: past.slice(0, -1),
        future: [present, ...future],
        canUndo: past.length > 1,
        canRedo: true,
      };
    case "REDO":
      if (!state.canRedo) return state;

      const [newPresent, ...newFuture] = future;
      return {
        present: newPresent,
        future: newFuture,
        past: [...past, present],
        canUndo: true,
        canRedo: newFuture.length > 0,
      };
    default:
      return state;
  }
};

const ReducerStudy2 = () => {
  const inputItem = useRef();
  const [items, dispatch] = useReducer(reducerItem, {
    present: [],
    past: [],
    future: [],
    canUndo: false,
    canRedo: false,
  });

  const additem = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      value: inputItem.current.value,
    });
    inputItem.current.value = "";
  };

  return (
    <>
      <h2>History, UseReducer应对复杂的State situation</h2>
      <form onSubmit={additem}>
        <input ref={inputItem} id="username"></input>
        <button type="submit">Add an Item to the List</button>
      </form>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "UNDO" });
          }}
        >
          Undo
        </button>
        <button
          onClick={() => {
            dispatch({ type: "REDO" });
          }}
        >
          Redo
        </button>
      </div>
      <ul>
        {console.log(items)}
        {items.present.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export { ReducerStudy1, ReducerStudy2 };
