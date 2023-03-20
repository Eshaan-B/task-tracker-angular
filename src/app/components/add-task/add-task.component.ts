import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Task from 'src/app/models/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onAdd: EventEmitter<Task> = new EventEmitter();
  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (!this.text || !this.day) return alert('Text and day cannot be empty');
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAdd.emit(newTask);
    this.text = this.day = '';
    this.reminder = false;
  }
}
