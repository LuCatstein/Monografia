/* global expect, it, describe */

import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('deve retornar o estado inicial se nenhuma ação for passada', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Adicionar todo', () => {
    it('deve retornar o estado correto', () => {
      const action = {
        type: types.SUBMIT_TODO,
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

      expect(reducer(undefined, action)).toEqual(expectedState);
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
        type: types.DELETE_TODO,
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

      expect(reducer(startingState, action)).toEqual(expectedState);
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
        type: types.UNDELETE_TODO,
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

      expect(reducer(startingState, action)).toEqual(expectedState);
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
        type: types.INPUT_CHANGED,
        inputText: '',
      };

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: true,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Deve retornar o estado correto quando o valor um valor é adicionado', () => {
      const startingState = {
        todos: [],
        deleted: {},
        disableAddTodo: true,
      };

      const action = {
        type: types.INPUT_CHANGED,
        inputText: todoText,
      };

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: false,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
