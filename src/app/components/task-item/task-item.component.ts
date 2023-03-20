import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../../models/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();

  onClick(): void {
    console.log(`Delete ${this.task.id}`);
    this.deleteTask.emit(this.task.id);
  }

  onDblClick() {
    this.toggleReminder.emit(this.task);
  }
}
