import { Component, EventEmitter, Input, Output } from '@angular/core';
import Task from '../../../../models/Task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/core/task.service';
import { faB, faBookReader } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();
  @Input() active!: boolean;
  faBookReader = faBookReader;
  constructor(private router: Router, private taskService: TaskService) {}

  showDetail(task: Task) {
    this.taskService.getTaskById(task.id!).subscribe((task: Task) => {
      console.log('Task is:', task);
      if (!task) this.router.navigate(['/notFound']);
      else this.router.navigate(['/home/detail', task.id]);
    });
  }
  deleteItem(): void {
    console.log(`Delete ${this.task.id}`);
    this.deleteTask.emit(this.task.id);
  }

  onDblClick() {
    this.toggleReminder.emit(this.task);
  }
}
