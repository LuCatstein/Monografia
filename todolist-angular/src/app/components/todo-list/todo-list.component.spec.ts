import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from 'src/app/reducers/todo.reducer';

describe('componente TodoList', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  const props = {
    todos: [
      {
        id: 1,
        text: 'tarefa',
      },
    ],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
      imports: [
        StoreModule.forRoot({
          todoList: todoListReducer
        }),
      ]
    })
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

  }));

  it('deve carregar com sucesso na tela', () => {
    expect(component).toBeTruthy();
  });

  it('Deve mostrar a tarefa na tela quando estiver adicionada', () => {
    expect('tarefa').toEqual(props.todos[0].text);
  });

  it('Deve chamar a função deleteTodo quando o botão Apagar for clicado', () => {
    spyOn(component,'deleteTodo');
    component.deleteTodo();
    expect(component.deleteTodo).toHaveBeenCalledTimes(1);
  });
});
