import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  currentYear: number;
  @Input() startingDayID = 89424;
  daysPerYear = 423;
  @Input() daysPerMonths = [31];
  daysPerWeek = 7;
  @Input() startingDoW = 1;
  DoW: string[] = DefaultDoWNames;
  MonthNames: string[];
  year: Year;
  showSettings = false;
  @ViewChild('newMonth') newMonth;

  constructor(
    private calendarService: CalendarService,
    private yearService: YearService) { }

  ngOnInit(): void {
    this.getSettings();
    this.getEvents();
  }

  generateDisplayYear(): void {
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    this.year = this.yearService.getDisplayYear(
      this.startingDayID, this.daysPerMonths, this.startingDoW,
      this.eventArray, this.daysPerWeek, this.MonthNames, this.currentYear);
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


  getSettings(): void {
    this.calendarService.requestCalendarSettings().subscribe(IncomingSettings => this.settingsArrived(IncomingSettings));
  }

  settingsArrived(IncomingSettings): void {
    this.calendarSettings = IncomingSettings;
    this.startingDayID = this.calendarSettings.startingDayID;
    this.daysPerMonths = this.calendarSettings.daysPerMonths;
    this.DoW = this.calendarSettings.DoW_names;
    this.daysPerWeek = this.DoW.length;
    this.MonthNames = this.calendarSettings.monthNames;
    this.currentYear = this.calendarSettings.currentYear;
    this.settingsLoaded = true;
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
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

  toggleSettingsSidebar(): void {
    this.showSettings = !this.showSettings;
  }

  trackArray(index, item) {
    return index;
  }

  addMonth(): void {
    const newMonthInput = document.getElementById('new-month-field') as HTMLInputElement;
    if (newMonthInput.value) {
      this.MonthNames.push(newMonthInput.value);
      this.daysPerMonths.push(1);
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      newMonthInput.value = '';
    }
  }

  deleteMonth(index: number): void {
    if (index >= 0) {
      this.daysPerMonths.splice(index, 1);
      this.MonthNames.splice(index, 1);
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    }
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW.splice(index, 1);
      this.daysPerWeek = this.DoW.length;
    }
  }
}
