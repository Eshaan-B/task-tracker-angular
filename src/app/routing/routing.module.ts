import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonComponent } from '../components/button/button.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { ToggleService } from '../services/toggle-service.service';
import { SealComponent } from '../components/seal/seal.component';
import { LoginComponent } from '../components/login/login.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { TaskContainerComponent } from '../components/task-container/task-container.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: TaskContainerComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'detail/:id',
    canActivate: [AuthGuardService],
    component: TaskDetailComponent,
  },
  {
    path: 'stressed',
    canActivate: [AuthGuardService],
    component: SealComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
