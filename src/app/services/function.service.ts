import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FunctionItem } from '../models/function.model';
import { API_CONFIG } from '../../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  
  private listUrl = `${API_CONFIG.baseUrl}${API_CONFIG.functionEndpoint.listEndpoint}`;
 
  constructor(private http: HttpClient) { }

  getFunctions(): Observable<FunctionItem[]> {
    console.log("function")
    return this.http.get<FunctionItem[]>(this.listUrl);
  }

  // Add methods for other actions if needed
}
