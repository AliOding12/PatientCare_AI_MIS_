import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isClosed = false;

  constructor(private router:Router){}
  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }
  Appointments(){
    this.router.navigate(['Appointment']);
  }

}
