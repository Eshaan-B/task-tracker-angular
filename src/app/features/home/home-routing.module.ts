import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';
import { TaskContainerComponent } from 'src/app/features/home/components/task-container/task-container.component';
import { TaskDetailComponent } from 'src/app/features/home/components/task-detail/task-detail.component';
import { DetailsGuard } from 'src/app/core/guards/details.guard';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

const homeRoutes: Routes = [
  {
    path: 'home',
    canActivate: [],
    component: TaskContainerComponent,
    children: [
      {
        path: 'detail/:id',
        canActivate: [DetailsGuard],
        component: TaskDetailComponent,
      },
      {
        path: 'notFound',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
