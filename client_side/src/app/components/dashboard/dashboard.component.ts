import { DataService } from './../../data.service';
import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  users: any[]= [];
  constructor(private dataservice:DataService) { }


  ngOnInit(){
    this.dataservice.getData().subscribe({
      next: (data)=> {this.users = data},
      error: (error)=> {console.error('Error Fetching Data:',error)}
  
  })

  }

  //what is the purpose of this ngModules 

 }
