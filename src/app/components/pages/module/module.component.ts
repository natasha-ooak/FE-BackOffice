import { Component, OnInit } from '@angular/core';
import { ModuleItem } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  modules: ModuleItem[] = [];

  constructor(private moduleService: ModuleService, private router: Router) { }

  ngOnInit(): void {
    this.moduleService.getModules().subscribe({
      next: (data: ModuleItem[]) => {
        this.modules = data;
      },
      error: (error) => {
        console.error('Error fetching modules', error);
      }
    });
  }

  addNew(): void{
    this.router.navigate(['/home/add-module']);
  }

  edit(id: number) {
    // Handle edit module
  }

  viewDetails(id: number) {
    // Handle view details
  }

  delete(id: number) {
    // Handle delete module
  }
}