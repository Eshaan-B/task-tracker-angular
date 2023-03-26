import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToggleService } from './services/toggle-service.service';
import { SealComponent } from './components/seal/seal.component';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { RoutingModule } from './routing/routing.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    SealComponent,
    LoginComponent,
    TaskDetailComponent,
    NotFoundComponent,
    TaskContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RoutingModule],
  providers: [ToggleService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
