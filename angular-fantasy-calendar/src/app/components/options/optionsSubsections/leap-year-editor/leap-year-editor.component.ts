import { Component, OnInit, Input } from '@angular/core';
import { LeapYear, EMPTY_LEAP_YEAR } from 'src/app/leapYear';

@Component({
  selector: 'app-leap-year-editor',
  templateUrl: './leap-year-editor.component.html',
  styleUrls: ['./leap-year-editor.component.css']
})
export class LeapYearEditorComponent implements OnInit {

  @Input() leapYears: LeapYear[];
  @Input() candidateLY = EMPTY_LEAP_YEAR;

  constructor() { }

  ngOnInit(): void {
  }


  addLY(): void {
    this.leapYears.push(this.candidateLY);
    this.candidateLY = {
      leapYearCycles: null,
      leapYearOffset: null,
      leapYearChange: null,
      leapDayMonth: null
    };
  }

  deleteLY(index: number): void {
    if (index >= 0) {
      this.leapYears.splice(index, 1);
    }
  }

  trackArray(index, item) {
    return index;
  }
}
