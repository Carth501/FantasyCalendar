import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../calendar.service';
import { CalendarEvent } from '../calendarEvent';
import { CalendarSettings } from '../calendarSettings';
import { TotalSettings } from '../totalSettings';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  faArrowAltCircleUp = faArrowAltCircleUp;

  calendarSettings: CalendarSettings;
  eventArray: CalendarEvent[];
  totalSettings: TotalSettings;

  constructor(
    private calendarService: CalendarService
    ) { }

  ngOnInit(): void {
    this.totalSettings = {calendarSettings: null, eventArray: null};
    this.getSettings();
    this.getEvents();
  }

  getSettings(): void {
    this.calendarService.requestCalendarSettings().subscribe(IncomingSettings => this.splitSettings(IncomingSettings));
  }

  splitSettings(calendarSettings: CalendarSettings): void {
    this.calendarSettings = calendarSettings;
    const tempCalendarSettings = _.cloneDeep(this.calendarSettings);
    this.totalSettings = {...this.totalSettings, calendarSettings: tempCalendarSettings};
  }

  getEvents(): void {
    this.calendarService.requestEvents().subscribe(IncomingEvents => this.eventsArrived(IncomingEvents));
  }

  eventsArrived(eventArray: CalendarEvent[]): void {
    this.eventArray = eventArray;
    const tempEventArray = _.cloneDeep(this.eventArray);
    this.totalSettings = {...this.totalSettings, eventArray: tempEventArray};
  }

  updateCalendar(newSettings: TotalSettings): void {
    this.totalSettings = newSettings;
    this.calendarSettings = {
      ...this.calendarSettings,
      daysPerMonths: newSettings.calendarSettings.daysPerMonths,
      DoW_names: newSettings.calendarSettings.DoW_names,
      monthNames: newSettings.calendarSettings.monthNames,
      currentYear: newSettings.calendarSettings.currentYear,
      leapYears: newSettings.calendarSettings.leapYears
    };
    this.eventArray = newSettings.eventArray;
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  newTotalSettings(newSettings: string): void {
    this.totalSettings = JSON.parse(newSettings);
    this.splitSettings(this.totalSettings.calendarSettings);
    this.eventsArrived(this.totalSettings.eventArray);
  }
}
