import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { About } from './about/about';
import { CommonModule } from '@angular/common';
import { IRole } from '../../interface/role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [FormsModule, CommonModule]
})

export class Header implements OnInit {
  firstName: string = "Sujith";
  currentComponent: string = "";
  roleList: IRole[]= [];

  changeMenu(menuName: string) {
    this.currentComponent = menuName;
  }

  http = inject(HttpClient);
  getAllRoles() {
    this.http.get("https://reqres.in/api/users/1").subscribe((res:any) => {
        this.roleList = res.data;
    })
  }
  ngOnInit(): void {
    this.getAllRoles();
  }

}
