import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './module.component.html'
})

export class ModuleComponent implements OnInit{

  ngOnInit() {
    
  }

}
