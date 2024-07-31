import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../../../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${API_CONFIG.baseUrl}${API_CONFIG.loginEndpoint}`;

  constructor() { 
     // Load user data from sessionStorage if needed
  }
  http = inject(HttpClient);

  // Return true is login success and store current user info in sessionStorage
  // So far only store selectedEntity, userObj
  login(loginObj: any, selectedEntity: any): Promise<boolean>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }).set('Access-Control-Allow-Origin', '*');
    
    return new Promise<boolean>((resolve, reject) => 
      this.http.post<{ Verified: boolean }>(
        this.loginUrl, 
        loginObj, 
        { headers: headers })
        .subscribe({
          next: (res) => {
            if (res.Verified) {
                sessionStorage.setItem('selectedEntity', JSON.stringify(selectedEntity));
                sessionStorage.setItem('userObj', JSON.stringify(loginObj));
                // Should get the user type from api
                switch (selectedEntity.name) {
                  case 'LC':
                    sessionStorage.setItem('currentUserRole', 'superadmin');
                    break;
                  case 'LP':
                    sessionStorage.setItem('currentUserRole', 'lp-user');
                    break;
                  case 'CP':
                    sessionStorage.setItem('currentUserRole', 'cp-user');
                    break;
                }
                console.log('return true');
                resolve(true);
            } else {
              resolve(false);
            }
          },
          error: (error: HttpErrorResponse) => {
            resolve(false);
          }
        })
      )
   }

  logout(): void {
    sessionStorage.removeItem('currentUserRole');
    sessionStorage.removeItem('userObj');
    sessionStorage.removeItem('selectedEntity');
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('currentUserRole');
  }

  getUserRole(): string {
    const userRole = sessionStorage.getItem('currentUserRole');
    console.log(userRole);
    return userRole ? userRole : '';
  }
}
