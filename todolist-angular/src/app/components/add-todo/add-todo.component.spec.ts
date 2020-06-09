import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTodoComponent } from './add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from 'src/app/reducers/todo.reducer';

describe('componente de AddTodo', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddTodoComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({
          todoList: todoListReducer
        }),
      ]
    })
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
  }));

  it('deve carregar com sucesso na tela', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter um input text', () => {
    let comp = fixture.nativeElement.querySelector('.todo-input');
    expect(comp).toBeTruthy();
  });

  it('deve chamar a função submitTodo quando clicado', () => {
    spyOn(component,'submitForm');
    component.submitForm();
    expect(component.submitForm).toHaveBeenCalledTimes(1);
  });

});
