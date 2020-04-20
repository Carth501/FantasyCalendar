import { Component, Input } from '@angular/core';
import { CalendarEvent } from '../calendarEvent';
import { EventTypes } from '../eventTypes';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  @Input() calendarEvent: CalendarEvent;
  @Input() eventType: EventTypes;
  expanded = false;
  @Input() editable = false;

  toggleEvent(): void {
    this.expanded = !this.expanded;
  }
}
