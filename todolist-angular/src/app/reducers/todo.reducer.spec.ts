/* global expect, it, describe */


import { todoListReducer } from './todo.reducer';
import { ActionTypes } from '../actions/todo.action';

const initialState = {
  todos: [],
  deleted: {},
  disableAddTodo: true,
  disableUndelete: true,
};

describe('Reducer', () => {
  const todoText = 'A todo';

  it('deve retornar o estado inicial se nenhuma ação for passada', () => {
    expect(todoListReducer(undefined, {})).toEqual(initialState);
  });

  describe('Adicionar todo', () => {
    it('deve retornar o estado correto', () => {
      const action = {
        type: ActionTypes.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        deleted: {},
        disableAddTodo: true,
        disableUndelete: true,
      };

      expect(todoListReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Apagar todo', () => {
    it('deve retornar o estado correto', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        deleted: {},
        disableUndelete: true,
      };

      const action = {
        type: ActionTypes.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText,
        },
        disableUndelete: false,
      };

      expect(todoListReducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Desfazer todo', () => {
    it('Deve retornar o estado correto', () => {
      const startingState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText,
        },
        disableUndelete: false,
      };

      const action = {
        type: ActionTypes.UNDELETE_TODO,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        deleted: {},
        disableUndelete: true,
      };

      expect(todoListReducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Input change', () => {
    it('Deve retornar o estado correto quando nenhum valor é adicionado', () => {
      const startingState = {
        todos: [],
        deleted: {},
        disableAddTodo: true,
      };

      const action = {
        type: ActionTypes.INPUT_CHANGED,
        inputText: '',
      };

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: true,
      };

      expect(todoListReducer(startingState, action)).toEqual(expectedState);
    });

    it('Deve retornar o estado correto quando o valor um valor é adicionado', () => {
      const startingState = {
        todos: [],
        deleted: {},
        disableAddTodo: true,
      };

      const action = {
        type: ActionTypes.INPUT_CHANGED,
        inputText: todoText,
      };

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: false,
      };

      expect(todoListReducer(startingState, action)).toEqual(expectedState);
    });
  });
});
