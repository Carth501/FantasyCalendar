import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY_LEAP_YEAR, LeapYear } from 'src/app/leapYear';

@Component({
  selector: 'app-new-leap-year-rule',
  templateUrl: './new-leap-year-rule.component.html',
  styleUrls: ['./new-leap-year-rule.component.css']
})
export class NewLeapYearRuleComponent {

  constructor() { }

  @Input() candidateLY = EMPTY_LEAP_YEAR;

  @Output() leapYearCreation = new EventEmitter<{newLeapYear: LeapYear}>();

  addLY(): void {
    this.leapYearCreation.emit({newLeapYear: this.candidateLY});
    this.resetEmptyLeapYear();
  }

  resetEmptyLeapYear(): void {
    this.candidateLY = {
      leapYearCycles: null,
      leapYearOffset: null,
      leapYearChange: null,
      leapDayMonth: null
    };
  }

}
