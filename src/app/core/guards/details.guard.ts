import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
import Task from 'src/app/models/Task';

@Injectable({
  providedIn: 'root',
})
export class DetailsGuard {
  taskId!: number;
  constructor(private taskService: TaskService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.taskId = route.params['id'];

    this.taskService.getTaskById(this.taskId).subscribe({
      next: (task: Task) => {
        return true;
      },
      error: (err) => {
        console.log('Not found');

        this.router.navigate(['/home/notFound']);
        return false;
      },
    });

    return true;
  }
}
