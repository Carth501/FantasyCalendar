import { Component, OnInit, Input } from '@angular/core';
import { CyclicalEvent, UniqueEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent, EventLists
  } from 'src/app/calendarEvent';

@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.css']
})
export class EventsEditorComponent implements OnInit {

  @Input() eventLists: EventLists;

  constructor() { }

  ngOnInit(): void {
  }

  createNewCyclicalEvent(newEvent: CyclicalEvent) {
    this.eventLists.cyclicalEvents.push(newEvent);
  }

  createNewUniqueEvent(newEvent: UniqueEvent) {
    this.eventLists.uniqueEvents.push(newEvent);
  }

  createNewYearlyEvent(newEvent: YearlyEvent) {
    this.eventLists.yearlyEvents.push(newEvent);
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent) {
    this.eventLists.monthlyEvents.push(newEvent);
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent) {
    this.eventLists.weeklyEvents.push(newEvent);
  }

  createNewMonthDOWEvent(newEvent: MonthlyDayOfWeekEvent) {
    this.eventLists.monthDOWEvents.push(newEvent);
  }

  createNewYearMonthDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent) {
    this.eventLists.yearMonthDOWEvents.push(newEvent);
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent) {
    this.eventLists.yearlyMonthlyEvents.push(newEvent);
  }
  deleteCyclicalEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.cyclicalEvents.splice(index, 1);
    }
  }

  deleteUniqueEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.uniqueEvents.splice(index, 1);
    }
  }

  deleteYearlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearlyEvents.splice(index, 1);
    }
  }

  deleteMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.monthlyEvents.splice(index, 1);
    }
  }

  deleteWeeklyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.weeklyEvents.splice(index, 1);
    }
  }

  deleteMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.monthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearMonthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearlyMonthlyEvents.splice(index, 1);
    }
  }

  trackArray(index, item) {
    return index;
  }
}
