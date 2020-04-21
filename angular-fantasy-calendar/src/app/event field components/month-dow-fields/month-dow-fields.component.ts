import { Component, Input } from '@angular/core';
import { MonthlyDayOfWeekEvent } from 'src/app/calendarEvent';

@Component({
  selector: 'app-month-dow-fields',
  templateUrl: './month-dow-fields.component.html',
  styleUrls: ['./month-dow-fields.component.css']
})
export class MonthDOWFieldsComponent {

  @Input() set addEvent(event) {
    this.monthlyEvent = event as MonthlyDayOfWeekEvent;
  }
  monthlyEvent: MonthlyDayOfWeekEvent;
  @Input() editable = false;

}
