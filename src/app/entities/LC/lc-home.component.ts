import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/common/sidebar/sidebar.component";
import { NavBarComponent } from "../../components/common/navbar/navbar.component";
import { FooterComponent } from '../../components/common/footer/footer.component';


@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, NavBarComponent, FooterComponent],
  templateUrl: './lc-home.component.html',
  styleUrl: './lc-home.component.css'
})


export class LCComponent {
  
}