import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
