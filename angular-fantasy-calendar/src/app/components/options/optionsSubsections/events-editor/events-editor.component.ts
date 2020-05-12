import { Component, OnInit, Input } from '@angular/core';
import { CyclicalEvent, UniqueEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent
  } from 'src/app/calendarEvent';

@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.css']
})
export class EventsEditorComponent implements OnInit {

  @Input() cyclicalEvents: CyclicalEvent[];
  @Input() uniqueEvents: UniqueEvent[];
  @Input() weeklyEvents: WeeklyEvent[];
  @Input() monthlyEvents: MonthlyEvent[];
  @Input() yearlyEvents: YearlyEvent[];
  @Input() monthDOWEvents: MonthlyDayOfWeekEvent[];
  @Input() yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
  @Input() yearlyMonthlyEvents: YearlyMonthlyEvent[];

  constructor() { }

  ngOnInit(): void {
  }

  createNewCyclicalEvent(newEvent: CyclicalEvent) {
    this.cyclicalEvents.push(newEvent);
  }

  createNewUniqueEvent(newEvent: UniqueEvent) {
    this.uniqueEvents.push(newEvent);
  }

  createNewYearlyEvent(newEvent: YearlyEvent) {
    this.yearlyEvents.push(newEvent);
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent) {
    this.monthlyEvents.push(newEvent);
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent) {
    this.weeklyEvents.push(newEvent);
  }

  createNewMonthDOWEvent(newEvent: MonthlyDayOfWeekEvent) {
    this.monthDOWEvents.push(newEvent);
  }

  createNewYearMonthDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent) {
    this.yearMonthDOWEvents.push(newEvent);
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent) {
    this.yearlyMonthlyEvents.push(newEvent);
  }
  deleteCyclicalEvent(index: number): void {
    if (index >= 0) {
      this.cyclicalEvents.splice(index, 1);
    }
  }

  deleteUniqueEvent(index: number): void {
    if (index >= 0) {
      this.uniqueEvents.splice(index, 1);
    }
  }

  deleteYearlyEvent(index: number): void {
    if (index >= 0) {
      this.yearlyEvents.splice(index, 1);
    }
  }

  deleteMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.monthlyEvents.splice(index, 1);
    }
  }

  deleteWeeklyEvent(index: number): void {
    if (index >= 0) {
      this.weeklyEvents.splice(index, 1);
    }
  }

  deleteMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.monthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.yearMonthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.yearlyMonthlyEvents.splice(index, 1);
    }
  }

  trackArray(index, item) {
    return index;
  }
}
