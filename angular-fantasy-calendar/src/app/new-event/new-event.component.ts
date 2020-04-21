import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CyclicalEvent, YearlyEvent, MonthlyEvent, WeeklyEvent } from '../calendarEvent';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {

  @Output() newCyclicalEvent = new EventEmitter<CyclicalEvent>();
  @Output() newYearlyEvent = new EventEmitter<YearlyEvent>();
  @Output() newMonthlyEvent = new EventEmitter<MonthlyEvent>();
  @Output() newWeeklyEvent = new EventEmitter<WeeklyEvent>();

  @Output() setWindow = new EventEmitter<boolean>();

  @Input() eventType = 'cyclical';
  @Input() title: string;
  @Input() offset: number;
  @Input() duration: number;
  @Input() repeatDays: number;
  @Input() roundToNearest: boolean;
  @Input() month: number;

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
    if (this.offset === null || this.offset < 1 || this.offset === undefined) {
      document.getElementById('offset').setAttribute('class', 'error');
      error = true;
    }
    if (this.duration === null || this.duration < 1 || this.duration === undefined) {
      document.getElementById('duration').setAttribute('class', 'error');
      error = true;
    }
    if (this.eventType === 'cyclical') {
      if (this.repeatDays === null || this.repeatDays < 1 || this.repeatDays === undefined) {
        document.getElementById('repeatDays').setAttribute('class', 'error');
        error = true;
      }
    }
    if (this.eventType === 'yearly') {
      if (this.month === null || this.month < 1 || this.month === undefined) {
        document.getElementById('month').setAttribute('class', 'error');
        error = true;
      }
    }
    if (!error) {
      this.newEventEmit();
      this.clearInput();
    }
  }

  clearInput(): void {
    this.title = null;
    this.offset = null;
    this.duration = null;
    this.repeatDays = null;
    this.roundToNearest = null;
    this.month = null;
  }

  newEventEmit(): void {
    if (this.eventType === 'cyclical') {
      const newCalendarEvent: CyclicalEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        repeatDays: this.repeatDays
      };
      this.newCyclicalEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'yearly') {
      const newCalendarEvent: YearlyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        month: (this.month - 1),
        roundToNearest: this.roundToNearest
      };
      this.newYearlyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'monthly') {
      const newCalendarEvent: MonthlyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        roundToNearest: this.roundToNearest
      };
      this.newMonthlyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'weekly') {
      const newCalendarEvent: WeeklyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        roundToNearest: this.roundToNearest
      };
      this.newWeeklyEvent.emit(newCalendarEvent);
    }
    this.closeWindow();
  }
}
