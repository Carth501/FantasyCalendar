import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../calendar.service';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent } from '../calendarEvent';
import { TotalSettings } from '../totalSettings';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  faArrowAltCircleUp = faArrowAltCircleUp;

  totalSettings: TotalSettings = {
    calendarSettings: null,
    cyclicalEvents: null,
    weeklyEvents: null,
    monthlyEvents: null,
    yearlyEvents: null,
    monthDOWEvents: null
  }; // initial values should not be passed to calendar component
  showNewEvent = false;

  myObserver = {
    next: x => this.setWindow(true),
    error: err => console.error('Got an error: ' + err),
    complete: () => console.log('Got a complete notification')
  };

  constructor(
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService
    ) {
      calendarEventService.dayclick$.subscribe(this.myObserver);
    }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings(): void {
    this.calendarService.requestCalendar().subscribe(IncomingSettings => this.splitSettings(IncomingSettings));
  }

  splitSettings(totalSettings: TotalSettings): void {
    this.totalSettings = totalSettings;
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  newTotalSettings(newSettings: string): void {
    this.totalSettings = JSON.parse(newSettings);
    this.splitSettings(this.totalSettings);
  }

  setWindow(state: boolean): void {
    this.showNewEvent = state;
  }

  createNewCyclicalEvent(newEvent: CyclicalEvent): void {
    const tempEventArray = this.totalSettings.cyclicalEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, cyclicalEvents: tempEventArray};
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent): void {
    const tempEventArray = this.totalSettings.weeklyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, weeklyEvents: tempEventArray};
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent): void {
    const tempEventArray = this.totalSettings.monthlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, monthlyEvents: tempEventArray};
  }

  createNewYearlyEvent(newEvent: YearlyEvent): void {
    const tempEventArray = this.totalSettings.yearlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearlyEvents: tempEventArray};
  }

  closeEventWindow(): void {
    this.showNewEvent = false;
  }
}
