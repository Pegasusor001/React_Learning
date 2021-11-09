import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
  useReducer,
} from "react";

import { TdInput, TdList } from "./Ref_Sub/index";
import { todoReducer } from "./Ref_Sub/reducer";
import { ITodo, IState, ACTION_TYPE } from "./Ref_Sub/types";

const initialState: IState = {
  todoList: [],
};

const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]>([]);

  //  useReducer: useState的高级解决方案，返回一个状态和一个 dispatch，dispatch会调用相关 reducer中参数，不需要setState中的东西

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    console.log(state.todoList);
  }, [state.todoList]);

  // const addTodo = useCallback((todo: ITodo) => {
  //   setTodoList((todoList) => [...todoList, todo]);
  // }, []);
  const addTodo = useCallback((todo: ITodo) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);

  return (
    <div className="todo-list">
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <TdList />
    </div>
  );
};

export { TodoList };
