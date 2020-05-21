import { Component, OnInit, Input } from '@angular/core';
import { CyclicalEvent, UniqueEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent, EventLists
  } from 'src/app/calendarEvent';
import { Store } from '@ngrx/store';
import { setEventLists, toggleNewEvent } from 'src/app/store/actions/options.actions';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { selectNewEventPanelOpen } from 'src/app/store/selectors/options.selector';

@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.css']
})
export class EventsEditorComponent implements OnInit {


  @Input() set setEventLists(eventLists: EventLists) {
    this.eventLists = _.cloneDeep(eventLists);
  }
  eventLists: EventLists;
  
  newEventPanelOpen$: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    this.newEventPanelOpen$ = this.store.select(selectNewEventPanelOpen);
  }

  ngOnInit(): void {
  }

  createNewCyclicalEvent(newEvent: CyclicalEvent) {
    this.eventLists.cyclicalEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewUniqueEvent(newEvent: UniqueEvent) {
    this.eventLists.uniqueEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewYearlyEvent(newEvent: YearlyEvent) {
    this.eventLists.yearlyEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent) {
    this.eventLists.monthlyEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent) {
    this.eventLists.weeklyEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewMonthDOWEvent(newEvent: MonthlyDayOfWeekEvent) {
    this.eventLists.monthDOWEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewYearMonthDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent) {
    this.eventLists.yearMonthDOWEvents.push(newEvent);
    this.pushEventLists();
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent) {
    this.eventLists.yearlyMonthlyEvents.push(newEvent);
    this.pushEventLists();
  }
  deleteCyclicalEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.cyclicalEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteUniqueEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.uniqueEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteYearlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearlyEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.monthlyEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteWeeklyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.weeklyEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.monthDOWEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteYearMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearMonthDOWEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  deleteYearMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.eventLists.yearlyMonthlyEvents.splice(index, 1);
      this.pushEventLists();
    }
  }

  trackArray(index, item) {
    return index;
  }

  pushEventLists(): void {
    this.store.dispatch(setEventLists({events: _.cloneDeep(this.eventLists)}));
  }

  toggleNewEventPanel(): void {
    this.store.dispatch(toggleNewEvent({}));
  }
}
