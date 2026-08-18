import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  studentNames: string[] = [
    'Amit Sharma',
    'Sneha Patil',
    'Rahul Verma',
    'Pooja Kulkarni',
    'Ravi Jadhav',
    'Neha Joshi',
    'Suresh Gaikwad',
    'Kiran Shinde',
    'Anjali More',
    'Vijay Deshmukh'
  ];
}
