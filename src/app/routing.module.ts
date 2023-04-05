import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { TaskContainerComponent } from './features/home/components/task-container/task-container.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: '**',
    redirectTo: 'notFound',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
