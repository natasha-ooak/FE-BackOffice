import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EntityService } from '../../shared/services/entity.service';

@Component({
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedEntity: any = null;

  router = inject(Router);
  entityService = inject(EntityService);
  http = inject(HttpClient);

  // Define entities with proper types
  entities = [
    { name: 'Linen Centre' },
    { name: 'Laundry Plant' },
    { name: 'Client Profile' }
  ];

  // Define loginObj with types
  loginObj: { contact: string; password: string } = {
    contact: "",
    password: ""
  };

  selectEntity(entity: any): void {
    this.selectedEntity = entity;
  }

  onLogin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post<{ Verified: boolean }>("http://10.10.60.101:8080/login", this.loginObj, { headers })
      .subscribe({
        next: (res) => {
          if (res.Verified) {
            if (this.selectedEntity) {
              sessionStorage.setItem('selectedEntity', JSON.stringify(this.selectedEntity));
              sessionStorage.setItem('userObj', JSON.stringify(this.loginObj));
              this.entityService.setSelectedEntity(this.selectedEntity);

              switch (this.selectedEntity.name) {
                case 'Linen Centre':
                  this.router.navigate(['/home']);
                  break;
                case 'Laundry Plant':
                  this.router.navigate(['/home']);
                  break;
                case 'Client Profile':
                  this.router.navigate(['/home']);
                  break;
              }
            } else {
              alert('Please select an entity');
            }
          } else {
            alert('Wrong phone number or password');
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login error', error);
          alert('An error occurred during login');
        }
      });
  }
}
