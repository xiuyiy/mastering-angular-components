import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;
}
