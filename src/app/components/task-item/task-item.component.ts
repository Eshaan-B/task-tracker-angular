import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../../models/Task';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();
  constructor(private router: Router) {}

  showDetail(task: Task) {
    this.router.navigate(['/detail', task.id]);
  }
  deleteItem(): void {
    console.log(`Delete ${this.task.id}`);
    this.deleteTask.emit(this.task.id);
  }

  onDblClick() {
    this.toggleReminder.emit(this.task);
  }
}
