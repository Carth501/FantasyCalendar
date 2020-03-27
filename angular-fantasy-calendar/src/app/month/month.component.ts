import { Component, Input } from '@angular/core';
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
export class MonthComponent {
  month: Month;
  @Input() calendarEvents: CalendarEvent[];
  @Input() startingDayID: number;
  @Input() length: number;
  @Input() startingDayEnum: DefaultDaysOfTheWeek;

  generateDisplayMonth(startingDayID: number, length: number, startingDayEnum: DefaultDaysOfTheWeek): void {
    this.startingDayID = startingDayID;
    this.length = length;
    this.startingDayEnum = startingDayEnum;
    let currentWeekday = startingDayEnum;
    let week = 0;
    this.month = {
      id: 0,
      weeks: []
    };
    for (let k = 0; k < (length + startingDayEnum) / 7; k++) {
      this.month.weeks.push({id: k, days: daySlots.slice()});
    }
    let i = 0;
    while (i < length) {
      this.month.weeks[week].days[currentWeekday] = {id: startingDayID + i, dayOfMonth: i + 1};
      if (currentWeekday === 6) {
        currentWeekday = 0;
        week++;
      } else {
        currentWeekday++;
      }
      i++;
    }
  }

  generateDefaultDisplayMonth(): void {
    this.generateDisplayMonth(0, 31, DefaultDaysOfTheWeek.Tuesday);
  }
}
