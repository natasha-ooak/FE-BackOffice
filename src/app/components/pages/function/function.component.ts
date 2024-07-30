import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './function.component.html'
})

export class FunctionComponent implements OnInit{

  ngOnInit() {
    
  }

}
