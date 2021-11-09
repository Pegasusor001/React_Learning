import React, { useState, useRef, FC, ReactElement } from "react";
import { ITodo } from "./types";

interface IProps {
  addTodo: (task: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  // ！用于强调 inputRef.current 一定存在，否则报错：Object is possibly 'null'.
  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();

    if (val.length) {
      const isExist = todoList.find((todo) => todo.content === val);

      if (isExist) {
        alert("existed");
        return;
      }

      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });
    }

    inputRef.current!.value = "";
  };

  return (
    <div>
      <input type="text" placeholder="To be input" ref={inputRef}></input>
      <button onClick={addItem}>Add</button>
    </div>
  );
};

const TdList = () => {
  return <div className="to-list"></div>;
};

export { TdInput, TdList };
