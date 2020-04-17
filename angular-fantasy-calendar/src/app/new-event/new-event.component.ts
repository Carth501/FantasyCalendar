import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CalendarEvent } from '../calendarEvent';
import { $$ } from 'protractor';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {

  @Output() newEvent = new EventEmitter<CalendarEvent>();
  @Output() setWindow = new EventEmitter<boolean>();

  @Input() eventID = 0;
  @Input() title: string;
  @Input() dateID: number;
  @Input() duration: number;
  @Input() repeatDays: number;
  @Input() repeatAnnual = false;

  constructor() { }

  closeWindow(): void {
    this.setWindow.emit(false);
  }

  createEvent(): void {
    let error = false;
    if (this.title === null || this.title === '' || this.title === undefined) {
      document.getElementById('title').setAttribute('class', 'error');
      error = true;
    }
    if (this.dateID === null || this.dateID < 1 || this.dateID === undefined) {
      document.getElementById('dateID').setAttribute('class', 'error');
      error = true;
    }
    if (this.duration === null || this.duration < 1 || this.duration === undefined) {
      document.getElementById('duration').setAttribute('class', 'error');
      error = true;
    }
    if (!this.repeatAnnual) {
      if (this.repeatDays === null || this.repeatDays < 1 || this.repeatDays === undefined) {
        document.getElementById('repeatDays').setAttribute('class', 'error');
        error = true;
      }
    }
    if (!error) {
      this.newEventEmit();
    }
  }

  newEventEmit(): void {
    console.log('this.title = ' + this.title);
    const newCalendarEvent: CalendarEvent = {
      eventID: this.eventID,
      title: this.title,
      dateID: this.dateID,
      duration: this.duration,
      repeatDays: this.repeatDays,
      repeatAnnual: this.repeatAnnual
    };
    this.newEvent.emit(newCalendarEvent);
    this.closeWindow();
  }
}
