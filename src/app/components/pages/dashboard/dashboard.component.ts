import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { NavBarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, SidebarComponent, NavBarComponent, FooterComponent],
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  ngOnInit() {
    
  }

}
