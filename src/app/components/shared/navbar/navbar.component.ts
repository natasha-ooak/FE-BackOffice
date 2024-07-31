import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';


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

  constructor(private authService: AuthService){
    const loggedData = sessionStorage.getItem("userObj");
    if (loggedData != null) {
      this.loggedUserdata = JSON.parse(loggedData);
    }
  }
  logout(){
    this.authService.logout()
  }
  
}