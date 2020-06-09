/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('componente TodoList', () => {
  const deleteMock = jest.fn();

  const props = {
    todos: [
      {
        id: 1,
        text: 'tarefa',
      },
    ],
    deleteTodo: deleteMock,
  };

  const component = shallow(<TodoList {...props} />);

  it('deve carregar com sucesso na tela', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Deve mostrar a tarefa na tela quando estiver adicionada', () => {
    expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
  });

  it('Deve chamar a função deleteTodo quando o botão Apagar for clicado', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.todo-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });
});
