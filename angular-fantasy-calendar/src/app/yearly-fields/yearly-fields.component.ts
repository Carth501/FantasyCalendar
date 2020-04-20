import { Component, Input } from '@angular/core';
import { YearlyEvent } from '../calendarEvent';

@Component({
  selector: 'app-yearly-fields',
  templateUrl: './yearly-fields.component.html',
  styleUrls: ['./yearly-fields.component.css']
})
export class YearlyFieldsComponent {

  @Input() set addEvent(event) {
    this.yearlyEvent = event as YearlyEvent;
  }
  yearlyEvent: YearlyEvent;
  @Input() editable = false;

}
