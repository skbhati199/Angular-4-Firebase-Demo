import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';

@Component({
  selector: 'app-firebase-curd',
  templateUrl: './firebase-curd.component.html',
  styleUrls: ['./firebase-curd.component.css']
})
export class FirebaseCurdComponent implements OnInit {
    todos$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.todos$ = this.af.list('/todos', {
      query: {
        limitToFirst: 3
      }
    });
  }

  addTodo(value: string): void {
    this.todos$.push({ content: value, done: false });
  }
  deleteTodo(todo: any): void {
    this.af.object('/todos/' + todo.$key).remove();
  }

 toggleDone(todo: any): void {
    this.af.object('/todos/' + todo.$key)
      .update({ content: todo.content, done: !todo.done });
  }

 

  updateTodo(todo: any, newValue: string): void {
    this.af.object('/todos/' + todo.$key)
      .update({ content: newValue, done: todo.done });    
}

}
