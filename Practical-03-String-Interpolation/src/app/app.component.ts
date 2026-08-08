import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular String Interpolation Demo';
  username = 'DevUser';
  today = new Date();

  getGreeting(): string {
    return `Welcome back, ${this.username}! Hope you have an awesome coding session.`;
  }
}
