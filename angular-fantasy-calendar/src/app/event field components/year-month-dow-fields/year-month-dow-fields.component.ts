import { Component, Input } from '@angular/core';
import { YearlyMonthlyDayOfWeekEvent } from 'src/app/calendarEvent';

@Component({
  selector: 'app-year-month-dow-fields',
  templateUrl: './year-month-dow-fields.component.html',
  styleUrls: ['./year-month-dow-fields.component.css']
})
export class YearMonthDowFieldsComponent {

  @Input() set addEvent(event) {
    this.yearMonthlyEvent = event as YearlyMonthlyDayOfWeekEvent;
  }
  yearMonthlyEvent: YearlyMonthlyDayOfWeekEvent;
  @Input() editable = false;

}
