import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './canvasbag.component.html'
})

export class CanvasBagComponent implements OnInit{

  ngOnInit() {
    
  }

}
