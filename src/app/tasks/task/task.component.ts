import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }
}
