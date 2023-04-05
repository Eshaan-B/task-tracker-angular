import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/task.service';
import { ToggleService } from '../../../../core/toggle-service.service';
import Task from '../../../../models/Task';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskId?: number;
  showTaskForm: boolean = false;
  subscripiton!: Subscription;

  constructor(
    private taskService: TaskService,
    private toggleService: ToggleService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscripiton = this.toggleService.onToggle().subscribe((value) => {
      this.showTaskForm = value;
    });
  }

  ngOnInit(): void {
    this.showTaskForm = this.toggleService.showAddform;
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id != id);
    });
  }
  toggleReminder(task: Task) {
    console.log(`Dbl click on ${task.id}`);
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe((task) => {});
  }
  addTask(newTask: Task) {
    this.taskService.postTasks(newTask).subscribe((res) => {
      console.log(res);
    });
    this.tasks.push(newTask);
  }
}
