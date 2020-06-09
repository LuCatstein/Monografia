// módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';

// componentes
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { todoListReducer } from './reducers/todo.reducer';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todoList: todoListReducer
    }),

  ],
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    HomepageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
