import { Component, Input, OnInit } from '@angular/core';
import { Month } from '../month';
import { CalendarEvent } from '../calendarEvent';
import { DefaultDaysOfTheWeek } from '../models/days-of-the-week';
import { Day } from '../day';

const daySlots = [null, null, null, null, null, null, null];

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  month: Month;
  @Input() calendarEvents: CalendarEvent[];
  @Input() startingDayID = 324;
  @Input() monthLength = 31;
  @Input() startingDayEnum = DefaultDaysOfTheWeek.Monday;
  DoW = DefaultDaysOfTheWeek;

  ngOnInit() {
    this.generateDisplayMonth();
  }

  generateDisplayMonth(): void {
    let currentWeekday = this.startingDayEnum;
    let week = 0;
    this.month = {
      id: 0,
      weeks: []
    };
    for (let k = 0; k < ((this.monthLength + this.startingDayEnum) / 7); k++) {
      this.month.weeks.push({id: k, days: daySlots.slice()});
    }
    let i = 0;
    while (i < this.monthLength) {
      this.month.weeks[week].days[currentWeekday] = {id: this.startingDayID + i, dayOfMonth: i + 1};
      if (currentWeekday === 6) {
        currentWeekday = 0;
        week++;
      } else {
        currentWeekday++;
      }
      i++;
    }
  }
}
