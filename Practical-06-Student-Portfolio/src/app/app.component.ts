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
  title = 'Student Developer Portfolio';

  student = {
    name: 'Pranav Girish Deshmukh',
    title: 'Full Stack & AI/ML Developer',
    rollNo: 'SM1104',
    division: 'M1',
    bio: 'Passionate computer engineering student with practical experience in Angular, TypeScript, Node.js, and modern full-stack web architectures.',
    skills: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Git/GitHub', 'CSS3/Tailwind'],
    projects: [
      {
        name: 'AI-Vayu-Kavach',
        description: 'Machine learning powered air quality monitoring and predictive defense architecture with Streamlit and FastAPI.',
        link: 'https://github.com/PEGASUSop09'
      },
      {
        name: 'TaskFlow Productivity Platform',
        description: 'A full-stack collaborative project and task management web app built with React, Node.js, and MongoDB.',
        link: 'https://github.com/PEGASUSop09'
      },
      {
        name: 'Sign-Speak Real-Time Translation',
        description: 'Computer vision assisted real-time Indian Sign Language to speech translation interface.',
        link: 'https://github.com/PEGASUSop09'
      }
    ],
    contact: {
      email: 'deshmukhpranav100@gmail.com',
      github: 'https://github.com/PEGASUSop09'
    }
  };
}
