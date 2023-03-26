import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  showAddform!: boolean;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddForm(): void {
    this.showAddform = !this.showAddform;
    this.subject.next(this.showAddform);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
