import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EntityService } from '../../shared/services/entity.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  selectedEntity: any = null;

  // router = inject(Router);
  entityService = inject(EntityService);
  http = inject(HttpClient);

  // Define entities with proper types
  entities = [
    { name: 'LC' },
    { name: 'LP' },
    { name: 'CP' }
  ];

  // Define loginObj with types
  loginObj: { contact: string; password: string } = {
    contact: "",
    password: ""
  };

  selectEntity(entity: any): void {
    this.selectedEntity = entity;
  }

  // Call login service
  async onLogin() {
    const loginSuccess = await this.authService.login(this.loginObj, this.selectedEntity)
    if(loginSuccess){
      const userRole = this.authService.getUserRole();
      this.router.navigate(['/home']);
    } else{
      alert('Wrong phone number or password');
    }
  }
}
