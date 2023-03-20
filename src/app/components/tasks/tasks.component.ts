import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Task from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showTaskForm: boolean = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleTaskForm() {
    this.showTaskForm = !this.showTaskForm;
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
