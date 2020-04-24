import { Component, Input } from '@angular/core';
import { YearlyMonthlyEvent } from 'src/app/calendarEvent';

@Component({
  selector: 'app-year-monthly-fields',
  templateUrl: './year-monthly-fields.component.html',
  styleUrls: ['./year-monthly-fields.component.css']
})
export class YearMonthlyFieldsComponent {

  @Input() set addEvent(event) {
    this.yearMonthlyEvent = event as YearlyMonthlyEvent;
  }
  yearMonthlyEvent: YearlyMonthlyEvent;
  @Input() editable = false;

}
