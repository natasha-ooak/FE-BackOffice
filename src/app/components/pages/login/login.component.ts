import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntityService } from '../../common/services/entity.service';

@Component({
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  selectedEntity: any = null;

  router = inject(Router);
  entityService = inject(EntityService);


  entities = [
    { name: 'Linen Centre' },
    { name: 'Laundry Plant' },
    { name: 'Client Profile' }
  ];

  selectEntity(entity: any): void {
    this.selectedEntity = entity;
  }

  loginObj: any = {
    "contact": "",
    "password": ""
  }

  http = inject(HttpClient);
  headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  


  onLogin() {
    this.http.post("http://10.10.60.101:8080/login", this.loginObj, {headers: this.headers}).subscribe((res: any) => {
      if (res.Verified) {
        if (this.selectedEntity) {
          sessionStorage.setItem('selectedEntity', JSON.stringify(this.selectedEntity));
          sessionStorage.setItem('userObj', JSON.stringify(this.loginObj));
          this.entityService.setSelectedEntity(this.selectedEntity); 
          switch (this.selectedEntity.name) {
            case 'Linen Centre':
              console.log("helo")
              this.router.navigate(['/lc-home']);
              break;
            case 'Laundry Plant':
              this.router.navigate(['/lp-home']);
              break;
            case 'Client Profile':
              this.router.navigate(['/cp-home']);
              break;
          }
        } else {
          alert('Please select an entity');
        } 
      }else {
        alert('Wrong phone number or password');
      }
    }
    )
}
}
