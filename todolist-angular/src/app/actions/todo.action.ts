import { Action } from '@ngrx/store';

export enum ActionTypes {
  SUBMIT_TODO = 'SUBMIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UNDELETE_TODO = 'UNDELETE_TODO',
  INPUT_CHANGED = 'INPUT_CHANGED',
}

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

export const SubmitTodo = (text: string) => {
    return <Action>{
      type: ActionTypes.SUBMIT_TODO,
      id: nextId(),
      text
    };
}

export const DeleteTodo = (id: number) => {
    return <Action>{
      type: ActionTypes.DELETE_TODO,
      id
    };
}

export const UndeleteTodo = () => {
    return <Action>{
      type: ActionTypes.UNDELETE_TODO,
    };
}

export const InputChanged = (inputText: string) => {
  return <Action>{
    type: ActionTypes.INPUT_CHANGED,
    inputText
  };
}
