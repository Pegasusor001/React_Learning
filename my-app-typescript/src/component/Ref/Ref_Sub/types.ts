import { type } from "os";

// see hoe setCount is typed.
export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface IState {
  todoList: ITodo[];
}

export interface IAction {
  type: ACTION_TYPE,
  payload: ITodo | number
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_todo = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo'
}
