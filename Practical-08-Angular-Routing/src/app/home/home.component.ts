import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  welcomeMessage = 'Welcome to the Angular Routing Demo Home Page!';
}
