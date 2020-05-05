import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../calendar.service';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  YearlyMonthlyEvent, YearlyMonthlyDayOfWeekEvent, UniqueEvent, MonthlyDayOfWeekEvent } from '../calendarEvent';
import { TotalSettings } from '../totalSettings';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private calenderSettingsURL = 'api/calendars';

  faArrowAltCircleUp = faArrowAltCircleUp;
  faBars = faBars;

  calendars: TotalSettings[];

  totalSettings: TotalSettings = {
    calendarName: null,
    calendarSettings: null,
    uniqueEvents: null,
    cyclicalEvents: null,
    weeklyEvents: null,
    monthlyEvents: null,
    yearlyEvents: null,
    monthDOWEvents: null,
    yearMonthDOWEvents: null,
    yearlyMonthlyEvents: null
  }; // initial values should not be passed to calendar component
  showNewEvent = false;
  newEventDayID: number;
  hideSettings = true;

  calendarIndex = 0;

  myObserver = {
    next: x => this.openWindow(x),
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
    this.getDefaultSettings();
  }

  getDefaultSettings(): void {
    this.calendarService.requestCalendar(this.calenderSettingsURL).subscribe(IncomingCalendars => this.recieveCalendars(IncomingCalendars));
  }

  recieveCalendars(calendars: TotalSettings[]): void {
    this.calendars = calendars;
    this.splitSettings(this.calendars[this.calendarIndex]);
  }

  splitSettings(totalSettings: TotalSettings): void {
    this.totalSettings = totalSettings;
  }

  viewCalendarSwitch(index: number): void {
    this.calendarIndex = index;
    console.log('viewCalendarSwitch ' + this.calendarIndex);
    this.splitSettings(this.calendars[this.calendarIndex]);
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  newTotalSettings(newSettings: string): void {
    this.totalSettings = JSON.parse(newSettings);
    this.splitSettings(this.totalSettings);
  }

  openWindow(dayID: number): void {
    this.setWindow(true);
    this.newEventDayID = dayID;
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

  createNewMonthlyDOWEvent(newEvent: MonthlyDayOfWeekEvent): void {
    const tempEventArray = this.totalSettings.monthDOWEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, monthDOWEvents: tempEventArray};
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent): void {
    const tempEventArray = this.totalSettings.yearlyMonthlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearlyMonthlyEvents: tempEventArray};
  }

  createNewYearlyMonthlyDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent): void {
    const tempEventArray = this.totalSettings.yearMonthDOWEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearMonthDOWEvents: tempEventArray};
  }

  createNewUniqueEvent(newEvent: UniqueEvent): void {
    const tempEventArray = this.totalSettings.uniqueEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, uniqueEvents: tempEventArray};
  }

  closeEventWindow(): void {
    this.showNewEvent = false;
  }

  toggleSettingsSidebar(): void {
    this.hideSettings = !this.hideSettings;
  }
}
