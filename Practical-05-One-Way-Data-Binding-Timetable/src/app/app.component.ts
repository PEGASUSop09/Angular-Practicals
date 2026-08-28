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
  title = 'Weekly Academic Timetable';
  
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periods: string[] = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM'];
  
  timetable: string[][] = [
    ['ML (Machine Learning)', 'FSD (Full Stack Dev)', 'SF (Software Frameworks)', 'ASD (Adv Software Dev)'],
    ['FSD (Full Stack Dev)', 'ASD (Adv Software Dev)', 'ML (Machine Learning)', 'SF (Software Frameworks)'],
    ['SF (Software Frameworks)', 'ML (Machine Learning)', 'FSD (Full Stack Dev)', 'ASD (Adv Software Dev)'],
    ['ASD (Adv Software Dev)', 'SF (Software Frameworks)', 'FSD (Full Stack Dev)', 'ML (Machine Learning)'],
    ['ML (Machine Learning)', 'SF (Software Frameworks)', 'ASD (Adv Software Dev)', 'FSD (Full Stack Dev)'],
  ];
}
