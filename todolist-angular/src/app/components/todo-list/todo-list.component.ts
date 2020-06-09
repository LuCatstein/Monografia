import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodoListModel } from 'src/app/models/todoList.model';
import { DeleteTodo } from 'src/app/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<any>;

  constructor(
    private store: Store<TodoListModel>,
  ) {
    this.todoList$ = store.pipe(select(state => state));
  }

  ngOnInit() {
  }

  deleteTodo(id: number = undefined) {
    this.store.dispatch(DeleteTodo(id));
  }

}
