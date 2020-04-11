import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../calendar.service';
import { CalendarEvent } from '../calendarEvent';
import { CalendarSettings } from '../calendarSettings';
import { OptionsSettings } from '../optionsSettings';
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
  optionsSettings: OptionsSettings;
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
    this.optionsSettings = {
      daysPerMonths: calendarSettings.daysPerMonths.slice(),
      DoWNames: calendarSettings.DoW_names.slice(),
      monthNames: calendarSettings.monthNames.slice(),
      currentYear: calendarSettings.currentYear,
      leapYears: calendarSettings.leapYears.slice()
    };
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

  updateCalendar(newSettings: OptionsSettings): void {
    this.calendarSettings = {
      startingDayID: this.calendarSettings.startingDayID,
      daysPerMonths: newSettings.daysPerMonths,
      startingDoW: this.calendarSettings.startingDoW,
      DoW_names: newSettings.DoWNames,
      monthNames: newSettings.monthNames,
      currentYear: newSettings.currentYear,
      leapYears: newSettings.leapYears
    };
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
