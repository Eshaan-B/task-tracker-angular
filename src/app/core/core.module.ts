import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './guards/auth-guard.service';
import { TaskService } from './task.service';
import { ToggleService } from './toggle-service.service';

@NgModule({
  declarations: [],
  providers: [AuthGuardService, TaskService, ToggleService],
  imports: [CommonModule],
})
export class CoreModule {}
