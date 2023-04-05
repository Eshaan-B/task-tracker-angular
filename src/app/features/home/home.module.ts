import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from 'src/app/features/home/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    TaskDetailComponent,
    TaskContainerComponent,
  ],
  imports: [CommonModule, FormsModule, HomeRoutingModule, FontAwesomeModule],
  exports: [],
})
export class HomeModule {}
