import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleItem } from '../../../../models/module.model';
import { ModuleService } from '../../../../services/module.service';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {

  module: ModuleItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.moduleService.getModuleById(+id).subscribe({
    //     next: (data: ModuleItem) => {
    //       this.module = data;
    //     },
    //     error: (error) => {
    //       console.error('Error fetching module details', error);
    //     }
    //   });
    // }
  }
}
