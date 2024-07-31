import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleItem } from '../models/module.model';
import { API_CONFIG } from '../../config/api-config';

@Injectable({
    providedIn: 'root'
  })
  export class ModuleService {
    
    private listUrl = `${API_CONFIG.baseUrl}${API_CONFIG.moduleEndpoint.listEndpoint}`;

    constructor(private http: HttpClient) { }
  
    getModules(): Observable<ModuleItem[]> {
      return this.http.get<ModuleItem[]>(this.listUrl);
    }
  
    addModule(module: ModuleItem): Observable<ModuleItem> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<ModuleItem>(this.listUrl, module, { headers });
    }
  
   
  }
