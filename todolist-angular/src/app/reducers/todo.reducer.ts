import { TodoListModel } from '../models/todoList.model';
import { ActionTypes } from '../actions/todo.action';

export const todoList = new TodoListModel();

export const initialState: TodoListModel = {
  todos: [],
  deleted: {},
  disableAddTodo: true,
  disableUndelete: true,
};

export function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SUBMIT_TODO:
            return {
              ...state,
              todos: [
                ...state.todos,
                {
                  id: action.id,
                  text: action.text,
                },
              ],
              disableAddTodo: true,
            };

        case ActionTypes.DELETE_TODO:
            return {
              ...state,
              todos: [
                ...state.todos.filter(todo => (
                  todo.id !== action.id
                )),
              ],
              deleted: state.todos.filter(todo => todo.id === action.id)[0],
              disableUndelete: false,
            };

        case ActionTypes.UNDELETE_TODO:
            return {
              ...state,
              todos: [
                ...state.todos,
                state.deleted,
              ],
              deleted: {},
              disableUndelete: true,
            };

        case ActionTypes.INPUT_CHANGED:
          console.log('state',state)
            if (action.inputText) {
              return {
                ...state,
                disableAddTodo: false,
              };
            }
            return {
              ...state,
            };

        default:
            return state;
    }

}
