import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private selectedEntitySubject = new BehaviorSubject<any>(null);
  selectedEntity$ = this.selectedEntitySubject.asObservable();

  setSelectedEntity(entity: any) {
    this.selectedEntitySubject.next(entity);
  }
}
