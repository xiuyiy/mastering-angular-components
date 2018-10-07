import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  tasks = [
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: true }
  ];

  addTask(title: string) {
    this.tasks.push({
      title, done: false
    });
  }

}
