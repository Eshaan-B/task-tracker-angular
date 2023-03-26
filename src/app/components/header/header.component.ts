import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle-service.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscripiton!: Subscription;

  constructor(private toggleService: ToggleService) {
    this.subscripiton = this.toggleService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask(): void {
    this.toggleService.toggleAddForm();
    console.log('toggle');
  }
}
