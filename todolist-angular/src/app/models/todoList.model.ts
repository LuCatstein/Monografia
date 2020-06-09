import { Action } from '@ngrx/store';

export class TodoModel {
  public id?: number;
  public text?: string;
}

export class TodoListModel {
    public todos: TodoModel[] = [];
    public deleted: TodoModel = {};
    disableAddTodo?: boolean = true;
    disableUndelete?: boolean = true;
}

export class ActionModel implements Action {
  type: string;
  id?: number;
  text?: string;
  inputText?: string;
}
