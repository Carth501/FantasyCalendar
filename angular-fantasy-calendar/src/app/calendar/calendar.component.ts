import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarEvent } from '../calendarEvent';
import { CalendarSettings } from '../calendarSettings';
import { Year } from '../year';
import { YearService } from '../year.service';

const DefaultDoWNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarSettings: CalendarSettings;
  eventArray: CalendarEvent[];
  settingsLoaded = false;
  eventsLoaded = false;
  @Input() startingDayID = 89424;
  @Input() daysPerYear = 423;
  @Input() daysPerMonth = 31;
  @Input() daysPerWeek = 7;
  @Input() startingDoW = 1;
  DoW: string[] = DefaultDoWNames;
  MonthNames: string[];
  year: Year;

  constructor(
    private calendarService: CalendarService,
    private yearService: YearService) { }

  ngOnInit(): void {
    this.getSettings();
    this.getEvents();
  }

  generateDisplayYear(): void {
    this.year = this.yearService.getDisplayYear(
      this.daysPerYear, this.startingDayID, this.daysPerMonth, this.startingDoW, this.eventArray, this.daysPerWeek, this.MonthNames);
  }


  generateNextDisplayYear(): void { // not currently supported.
    /*
    this.startingDoW = this.monthService.getNextStartingDoW(this.daysPerMonth, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.monthService.getNextStartingID(this.startingDayID, this.daysPerMonth);
    */
    this.generateDisplayYear();
  }

  generatePreviousDisplayYear(): void { // not currently supported.
    /*
    this.startingDoW = this.monthService.getPreviousStartingDoW(this.daysPerMonth, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.monthService.getPreviousStartingID(this.startingDayID, this.daysPerMonth);
    */
    this.generateDisplayYear();
  }


  getSettings(): void {
    this.calendarService.requestCalendarSettings().subscribe(IncomingSettings => this.settingsArrived(IncomingSettings));
  }

  settingsArrived(IncomingSettings): void {
    this.calendarSettings = IncomingSettings;
    this.daysPerMonth = this.calendarSettings.daysPerMonth;
    this.DoW = this.calendarSettings.DoW_names;
    this.daysPerWeek = this.DoW.length;
    this.MonthNames = this.calendarSettings.monthNames;
    this.settingsLoaded = true;
    this.calendarReady();
  }

  getEvents(): void {
    this.calendarService.requestEvents().subscribe(IncomingEvents => this.eventsArrived(IncomingEvents));
  }

  eventsArrived(IncomingEvents): void {
    this.eventArray = IncomingEvents;
    this.eventsLoaded = true;
    this.calendarReady();
  }

  calendarReady(): void {
    if (this.settingsLoaded && this.eventsLoaded) {
      this.generateDisplayYear();
    }
  }
}
