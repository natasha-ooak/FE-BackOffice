import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../../services/function.service';
import { FunctionItem } from '../../../models/function.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-function-list',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  functions: FunctionItem[] = [];

  constructor(private functionService: FunctionService) { }

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
}
