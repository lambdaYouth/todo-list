import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [FormsModule, CommonModule]
})

export class Header {
  addDarkMode(): void {
    console.log("Implement dark mode")
  }
}
