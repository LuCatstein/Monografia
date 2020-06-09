import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { TodoListModel } from 'src/app/models/todoList.model';
import { SubmitTodo, InputChanged, UndeleteTodo } from 'src/app/actions/todo.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  form: FormGroup;
  disableAddTodo: boolean = false;
  disableUndelete: boolean = true;
  todoList$: Observable<any>;

  constructor(
    private store: Store<TodoListModel>,
    private formBuilder: FormBuilder,
  ) {
    this.todoList$ = store.pipe(select(state => state));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todoInput: ['']
    });
  }

  submitForm() {
    if (this.form.value.todoInput) {
      this.store.dispatch(SubmitTodo(this.form.value.todoInput));
    }
    console.log('this.form.value.todoInput',this.form.value.todoInput)
  }

  inputChanged() {
    this.store.dispatch(InputChanged(this.form.value.todoInput));
  }

  undelete() {
    this.store.dispatch(UndeleteTodo());
  }

}
