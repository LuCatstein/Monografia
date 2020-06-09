/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('componente de AddTodo', () => {
  let component;
  let mountedComponent;
  const mockAdicionar = jest.fn();
  const mockDesfazer = jest.fn();
  const mockChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={mockAdicionar}
        undeleteTodo={mockDesfazer}
        inputChanged={mockChange}
        disableAddTodo
        disableUndelete
      />,
    );

    mountedComponent = mount(
      <AddTodo
        submitTodo={mockAdicionar}
        undeleteTodo={mockDesfazer}
        inputChanged={mockChange}
        disableAddTodo
        disableUndelete
      />,
    );
  });

  it('deve carregar com sucesso na tela', () => {
    expect(component.exists()).toEqual(true);
  });

  it('deve conter um input text', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });
  
  describe('Botão adicionar', () => {
    it('Deve existir', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('deve chamar a função submitTodo quando clicado', () => {
      expect(mockAdicionar.mock.calls.length).toEqual(0);
      mountedComponent.find('form').simulate('submit');
      expect(mockAdicionar.mock.calls.length).toEqual(1);
    });

    it('deve estar desabilitado quando o campo não estiver preenchido', () => {
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('não deve estar desabilitado quando o campo estiver preenchido', () => {
      component = shallow(
        <AddTodo
          submitTodo={mockAdicionar}
          undeleteTodo={mockDesfazer}
          inputChanged={mockChange}
          disableAddTodo={false}
          disableUndelete
        />,
      );

      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });

  describe('Botão desfazer', () => {
    const undeleteComponent = shallow(
      <AddTodo
        submitTodo={mockAdicionar}
        undeleteTodo={mockDesfazer}
        inputChanged={mockChange}
        disableAddTodo
        disableUndelete={false}
      />,
    );

    it('deve existir', () => {
      expect(undeleteComponent.find('.todo-undelete').length).toEqual(1);
    });

    it('deve chamar a função undeleteTodo quando clicado', () => {
      expect(mockDesfazer.mock.calls.length).toEqual(0);
      undeleteComponent.find('.todo-undelete').simulate('click');
      expect(mockDesfazer.mock.calls.length).toEqual(1);
    });

    it('deve estar desabilitado quando não houver uma tarefa apagada', () => {
      const disabled = component.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('não deve estar desabilitado quando houver uma tarefa apagada', () => {
      const disabled = undeleteComponent.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });
});
