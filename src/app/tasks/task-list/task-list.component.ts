import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks = [
    {id: 1, title: 'Task 1', done: false},
    {id: 2, title: 'Task 2', done: true}
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
