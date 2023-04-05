import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Task from 'src/app/models/Task';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {}
  taskId!: number;
  task!: Task;
  ngOnInit() {
    // this.taskId = this.activatedRoute.snapshot.params['id'];
    // this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.deleteAlert.subscribe((taskId) => {
      var currentTaskId = parseInt(
        this.activatedRoute.snapshot.paramMap.get('id')!
      );

      if (currentTaskId === taskId) {
        this.router.navigate(['home/notFound']);
      }
    });

    this.activatedRoute.paramMap.subscribe((param) => {
      this.taskId = parseInt(param.get('id')!);
      this.taskService.getTaskById(this.taskId).subscribe((task: Task) => {
        if (!task) this.router.navigate(['/notFound']);
        else this.task = task;
      });
    });
  }
}
