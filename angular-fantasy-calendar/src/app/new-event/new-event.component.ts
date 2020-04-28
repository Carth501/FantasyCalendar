import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CyclicalEvent, MonthlyEvent, WeeklyEvent, YearlyEvent, MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent, UniqueEvent } from '../calendarEvent';

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
  @Output() newMonthDOWEvent = new EventEmitter<MonthlyDayOfWeekEvent>();
  @Output() newYearMonthDOWEvent = new EventEmitter<YearlyMonthlyDayOfWeekEvent>();
  @Output() newYearMonthlyEvent = new EventEmitter<YearlyMonthlyEvent>();
  @Output() newUniqueEvent = new EventEmitter<UniqueEvent>();
  

  @Output() setWindow = new EventEmitter<boolean>();

  @Input() eventType = 'cyclical';
  @Input() title: string;
  @Input() offset: number;
  @Input() duration: number;
  @Input() repeatDays: number;
  @Input() roundToNearest: boolean;
  @Input() month: number;
  @Input() weekOffset: number;
  @Input() monthOffset: number;
  @Input() clickedDayID: number;

  constructor() { }

  closeWindow(): void {
    this.setWindow.emit(false);
  }

  createEvent(): void {
    let error = false;
    let message = '';
    if (this.title === null || this.title === '' || this.title === undefined) {
      message += 'Title invalid\n';
      error = true;
    }
    if (this.eventType === 'unique') {
      if (this.clickedDayID === null || this.clickedDayID < 1 || this.clickedDayID === undefined) {
        message += 'Clicked day ID invalid\n';
        error = true;
      }
    } else {
      if (this.offset === null || this.offset < 1 || this.offset === undefined) {
        message += 'Offset invalid\n';
        error = true;
      }
    }
    if (this.duration === null || this.duration < 1 || this.duration === undefined) {
      message += 'Duration invalid\n';
      error = true;
    }
    if (this.eventType === 'cyclical') {
      if (this.repeatDays === null || this.repeatDays < 1 || this.repeatDays === undefined) {
        message += 'Repeat days invalid\n';
        error = true;
      }
    }
    if (this.eventType === 'monthDOW') {
      if (this.weekOffset === null || this.weekOffset < 1 || this.weekOffset === undefined) {
        message += 'Month day of week invalid\n';
        error = true;
      }
    }
    if (this.eventType === 'yearMonthDOW') {
      if (this.monthOffset === null || this.monthOffset < 1 || this.monthOffset === undefined) {
        message += 'Month Offset invalid\n';
        error = true;
      }
    }
    if (!error) {
      this.newEventEmit();
      this.clearInput();
    } else {
      console.log(message);
    }
  }

  clearInput(): void {
    this.title = null;
    this.offset = null;
    this.duration = null;
    this.repeatDays = null;
    this.roundToNearest = null;
    this.month = null;
    this.weekOffset = null;
    this.monthOffset = null;
    this.clickedDayID = null;
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
        duration: this.duration
      };
      this.newYearlyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'monthly') {
      const newCalendarEvent: MonthlyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration
      };
      this.newMonthlyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'weekly') {
      const newCalendarEvent: WeeklyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration
      };
      this.newWeeklyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'monthDOW') {
      const newCalendarEvent: MonthlyDayOfWeekEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        weekOffset: this.weekOffset
      };
      this.newMonthDOWEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'yearMonthDOW') {
      const newCalendarEvent: YearlyMonthlyDayOfWeekEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        weekOffset: this.weekOffset,
        monthOffset: this.monthOffset
      };
      this.newYearMonthDOWEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'yearMonthly') {
      const newCalendarEvent: YearlyMonthlyEvent = {
        title: this.title,
        offset: this.offset,
        duration: this.duration,
        monthOffset: this.monthOffset
      };
      this.newYearMonthlyEvent.emit(newCalendarEvent);
    } else if (this.eventType === 'unique') {
      const newCalendarEvent: UniqueEvent = {
        title: this.title,
        offset: this.clickedDayID,
        duration: this.duration
      };
      this.newUniqueEvent.emit(newCalendarEvent);
    }
    this.closeWindow();
  }
}
