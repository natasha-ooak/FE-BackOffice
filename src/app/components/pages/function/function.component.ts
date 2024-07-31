import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../../services/function.service';
import { FunctionItem } from '../../../models/function.model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-function-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  functions: FunctionItem[] = [];

  constructor(private functionService: FunctionService, private router: Router) { }

  ngOnInit(): void {
    this.functionService.getFunctions().subscribe({
      next: (data: FunctionItem[]) => {
        this.functions = data;
      },
      error: (error) => {
        console.error('Error fetching functions', error);
      }
    });
  }

  editFunction(code:string): void {
    console.log("hi")
    this.router.navigate(['/home/edit-function', code]);
  }

}
