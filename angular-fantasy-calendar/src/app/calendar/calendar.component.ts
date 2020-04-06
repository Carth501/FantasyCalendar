import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Year } from '../year';
import { YearService } from '../year.service';
import { CalendarEvent } from '../calendarEvent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Input() set calendarSettings(value) { this.settingsArrived(value); }
  @Input() set setEventArray(value) { this.eventsArrived(value); }

  eventArray: CalendarEvent[];
  settingsLoaded = false;
  eventsLoaded = false;

  currentYear: number;
  startingDayID: number;
  daysPerYear: number;
  @Input() daysPerMonths: number[];
  daysPerWeek: number;
  startingDoW: number;
  DoW_Names: string[];
  MonthNames: string[];
  year: Year;
  @ViewChild('newMonth') newMonth;

  constructor(
    private yearService: YearService) { }

  generateDisplayYear(): void {
    if (this.calendarReady) {
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      this.year = this.yearService.getDisplayYear(
        this.startingDayID, this.daysPerMonths, this.startingDoW,
        this.eventArray, this.daysPerWeek, this.MonthNames, this.currentYear);
    } else {
      console.log('generateDisplayYear was called, but not ready!');
    }
  }


  generateNextDisplayYear(): void {
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    this.startingDoW = this.yearService.getNextStartingDoW(this.daysPerYear, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.yearService.getNextStartingID(this.startingDayID, this.daysPerYear);
    this.currentYear++;
    this.generateDisplayYear();
  }

  generatePreviousDisplayYear(): void {
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    this.startingDoW = this.yearService.getPreviousStartingDoW(this.daysPerYear, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.yearService.getPreviousStartingID(this.startingDayID, this.daysPerYear);
    this.currentYear--;
    this.generateDisplayYear();
  }



  settingsArrived(IncomingSettings): void {
    if (IncomingSettings) {
      this.startingDayID = IncomingSettings.startingDayID;
      this.daysPerMonths = IncomingSettings.daysPerMonths;
      this.DoW_Names = IncomingSettings.DoW_names;
      this.startingDoW = IncomingSettings.startingDoW;
      this.daysPerWeek = this.DoW_Names.length;
      this.MonthNames = IncomingSettings.monthNames;
      this.currentYear = IncomingSettings.currentYear;
      this.settingsLoaded = true;
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      this.calendarReady();
    }
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
