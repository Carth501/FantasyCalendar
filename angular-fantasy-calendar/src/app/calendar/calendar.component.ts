import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarEvent } from '../calendarEvent';
import { CalendarSettings } from '../calendarSettings';
import { DefaultDaysOfTheWeek } from '../models/days-of-the-week';
import { MonthService } from '../month.service';
import { Month } from '../month';

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
  @Input() monthLength = 31;
  @Input() daysPerWeek = 7;
  @Input() startingDoW = 1;
  DoW = DefaultDaysOfTheWeek;
  month: Month;

  constructor(
    private calendarService: CalendarService,
    private monthService: MonthService) { }

  ngOnInit(): void {
    this.getSettings();
    this.getEvents();
  }




  generateDisplayMonth(): void {
    this.month = this.monthService.getDisplayMonth(
      this.startingDayID, this.monthLength, this.startingDoW, this.eventArray, this.daysPerWeek);
  }

  generateNextDisplayMonth(): void {
    this.startingDoW = this.monthService.getNextStartingDoW(this.monthLength, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.monthService.getNextStartingID(this.startingDayID, this.monthLength);
    this.generateDisplayMonth();
  }

  generatePreviousDisplayMonth(): void {
    this.startingDoW = this.monthService.getPreviousStartingDoW(this.monthLength, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.monthService.getPreviousStartingID(this.startingDayID, this.monthLength);
    this.generateDisplayMonth();
  }








  getSettings(): void {
    this.calendarService.requestCalendarSettings().subscribe(IncomingSettings => this.settingsArrived(IncomingSettings));
  }

  settingsArrived(IncomingSettings): void {
    this.calendarSettings = IncomingSettings;
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
      console.log('calendarReady Called');
      this.generateDisplayMonth();
    }
  }
}
