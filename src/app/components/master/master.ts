import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-master',
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {
  taskName: string = "";
  taskList: string[] = [];
  completedTaskList: string[] = [];
  faClock = faClock;
  faCheck = faCircleCheck;

  addTask() {
    if(this.taskName.trim().length!=0 && this.taskName.length!=0) { 
      this.taskList.push(this.taskName);
    }
    else {
      alert("Enter valid name!");
      return;
    }
    console.log(this.taskList);
  }

  addToComplete(task: string) {
    const index = this.taskList.indexOf(task);
    if (index > -1) {
    this.taskList.splice(index, 1);
    this.completedTaskList.push(task);
  }

  console.log("Completed list:", this.completedTaskList);
  console.log("Pending list:", this.taskList);
  }
}
