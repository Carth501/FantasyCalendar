import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from '../../calendarEvent';
import { EventTypes } from '../../eventTypes';
import { Store } from '@ngrx/store';

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
  tagsWindow = false;
  @Output() saveEmitter: EventEmitter<string[]> = new EventEmitter();

  toggleEvent(): void {
    this.expanded = !this.expanded;
  }

  changeMade(): void {
    this.saveEmitter.emit();
  }
}
