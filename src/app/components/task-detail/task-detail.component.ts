import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Task from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}
  taskId!: number;
  task!: Task;
  ngOnInit() {
    this.taskId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.taskId).subscribe((task: Task) => {
      this.task = task;
    });
  }
}
