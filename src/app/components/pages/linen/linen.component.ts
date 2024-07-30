import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './linen.component.html'
})

export class LinenComponent implements OnInit{

  ngOnInit() {
    
  }

}
