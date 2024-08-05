import { Component } from '@angular/core';
import { ModuleItem } from '../../../../models/module.model';
import { ModuleService } from '../../../../services/module.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-module',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-module.component.html',
  styleUrl: './edit-module.component.css'
})
export class EditModuleComponent {
  functionItem: ModuleItem = {
    id: 0,
    module_name: '',
    description: ''
  };

  constructor(private moduleService: ModuleService, private route: ActivatedRoute, private router: Router) { }
}

