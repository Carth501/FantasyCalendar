import { Component, Input } from '@angular/core';
import { WeeklyEvent } from '../../calendarEvent';

@Component({
  selector: 'app-weekly-fields',
  templateUrl: './weekly-fields.component.html',
  styleUrls: ['./weekly-fields.component.css']
})
export class WeeklyFieldsComponent {

  @Input() set addEvent(event) {
    this.weeklyEvent = event as WeeklyEvent;
  }
  weeklyEvent: WeeklyEvent;
  @Input() editable = false;

}
