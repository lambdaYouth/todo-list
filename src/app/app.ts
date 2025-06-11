import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Master } from './components/master/master';
// import { About } from './components/header/about/about';

@Component({
  selector: 'app-root',
  imports: [Header, Master],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'todo';
}
