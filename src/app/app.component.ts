import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url!: string;
  constructor(private router: Router) {}
  ngOnInit() {
    this.url = this.router.url;
    console.log(this.url);
  }
}
