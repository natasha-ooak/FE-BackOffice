import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavBarComponent {

  router = inject(Router);
  loggedUserdata: any; 

  constructor(){
    const loggedData = sessionStorage.getItem("userObj");
    if (loggedData != null) {
      this.loggedUserdata = JSON.parse(loggedData);
    }
  }
  logout(){
    sessionStorage.removeItem("userObj");
    sessionStorage.removeItem("selectedEntity"); 
    this.router.navigateByUrl('login')
  }
  
}