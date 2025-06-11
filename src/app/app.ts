import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
// import { About } from './components/header/about/about';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'todo';
}
