import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import _  from 'lodash';

@Component({
  selector: 'app-master',
  imports: [FormsModule, CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {
  taskName: string = "";
  taskList: string[] = [];
  completedTaskList: string[] = [];

  addTask() {
    this.taskList.push(this.taskName);
    console.log(this.taskList);
  }

  addToComplete() {
    let checkBox = document.getElementById("task");
    let label = checkBox?.nextElementSibling;
    let completedTaskName = label?.textContent;
    if(completedTaskName) { this.completedTaskList.push(completedTaskName) } else { console.log("No tasks") };
    this.taskList = _.remove(this.taskList, (name) => {
      name === completedTaskName;
    })

  }
}
