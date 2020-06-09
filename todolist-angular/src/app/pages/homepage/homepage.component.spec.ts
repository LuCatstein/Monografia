import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from 'src/app/reducers/todo.reducer';

describe('Componente HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent,
        AddTodoComponent,
        TodoListComponent
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          todoList: todoListReducer
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
