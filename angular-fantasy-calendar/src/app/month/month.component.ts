import { Component, OnInit } from '@angular/core';
import { WEEKS } from '../mock-days';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  weeks = WEEKS;

  constructor() { }

  ngOnInit(): void {
  }

}
