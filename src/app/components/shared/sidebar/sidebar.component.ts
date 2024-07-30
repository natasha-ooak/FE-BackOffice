import { Component, OnInit } from '@angular/core';
import { EntityService } from '../services/entity.service';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor,NgIf],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedEntity: any = null;

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    const savedEntity = sessionStorage.getItem('selectedEntity');
    if (savedEntity) {
      this.selectedEntity = JSON.parse(savedEntity);
    }
  
    this.entityService.selectedEntity$.subscribe(entity => {
      if (entity) {
        this.selectedEntity = entity;
      }
      
    });
  }
  
}