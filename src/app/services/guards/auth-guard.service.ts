import {
  ActivatedRoute,
  CanActivate,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Promise<Boolean> | Observable<boolean> | boolean {
    let isLoggedIn: boolean = this.authService.isAuthenticated();
    if (isLoggedIn) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
