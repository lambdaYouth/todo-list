import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [FormsModule]
})

export class Header {
  firstName: string = "Sujith";

  welcomeAlert() {
    alert("Welcome to the site!")
  }
}
