import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  ngOnInit() {
    
  }

}
