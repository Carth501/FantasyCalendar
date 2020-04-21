import { Component, Input } from '@angular/core';
import { MonthlyEvent } from '../../calendarEvent';

@Component({
  selector: 'app-monthly-fields',
  templateUrl: './monthly-fields.component.html',
  styleUrls: ['./monthly-fields.component.css']
})
export class MonthlyFieldsComponent {

  @Input() set addEvent(event) {
    this.monthlyEvent = event as MonthlyEvent;
  }
  monthlyEvent: MonthlyEvent;
  @Input() editable = false;

}
