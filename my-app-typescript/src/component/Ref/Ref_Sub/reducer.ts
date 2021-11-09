import { ACTION_TYPE, IAction, IState, ITodo } from "./types";

function todoReducer (state: IState, action: IAction) {
  const {type, payload} = action;

  switch (type) {
    case ACTION_TYPE.ADD_TODO: 
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }
    case ACTION_TYPE.REMOVE_todo: 
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload)
      }
    case ACTION_TYPE.TOGGLE_TODO: 
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id === payload ? 
          {
            ...todo,
            completed: !todo.completed
          } : {
            ...todo,
          }
        })
    }
    default:
      return state
  }
}

export { todoReducer }