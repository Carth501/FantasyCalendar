import { Component, Input, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CalendarEvent } from '../calendarEvent';
import { LeapYear } from '../leapYear';
import { Year } from '../year';
import { YearService } from '../year.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Input() set calendarSettings(value) { this.settingsArrived(value); }
  @Input() set setEventArray(value) { this.eventsArrived(value); }

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;

  eventArray: CalendarEvent[];
  settingsLoaded = false;
  eventsLoaded = false;

  currentYear: number;
  startingDayID: number;
  daysPerYear: number;
  @Input() daysPerMonths: number[];
  daysPerWeek: number;
  startingDoW: number;
  DoWNames: string[];
  MonthNames: string[];
  year: Year;
  userYearChange = new Subject<number>();
  @ViewChild('newMonth') newMonth;

  leapYears: LeapYear[];

  constructor(
    private yearService: YearService) {
      // Debounce search.
      this.userYearChange.pipe(
        debounceTime(400),
        distinctUntilChanged())
        .subscribe(value => {
          this.jumpToYear(value);
        });
      }

  generateDisplayYear(): void {
    if (this.calendarReady) {
      this.daysPerYear = this.calculateYearLength();
      this.year = this.yearService.getDisplayYear(
        this.startingDayID, this.daysPerMonths, this.startingDoW, this.eventArray,
        this.daysPerWeek, this.MonthNames, this.currentYear, this.leapYears,
        );
    } else {
      console.log('generateDisplayYear was called, but not ready!');
    }
  }

  jumpToYear(newYear: number): void {
    const deltaYear = newYear - this.currentYear;
    if (deltaYear > 0) {
      for (let x = 0; x < deltaYear; x++) {
        this.generateNextDisplayYear();
      }
    } else if (deltaYear < 0) {
      for (let x = 0; x > deltaYear; x--) {
        this.generatePreviousDisplayYear();
      }
    }
  }

  calcNextYearData(): void {
    this.startingDoW = this.yearService.getNextStartingDoW(this.daysPerYear, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.yearService.getNextStartingID(this.startingDayID, this.daysPerYear);
    this.currentYear++;
  }

  generateNextDisplayYear(): void {
    console.log('nextDisplay');
    this.calcNextYearData();
    this.generateDisplayYear();
  }

  calcPreviousYearData(): void {
    this.startingDoW = this.yearService.getPreviousStartingDoW(this.daysPerYear, this.startingDoW, this.daysPerWeek);
    this.startingDayID = this.yearService.getPreviousStartingID(this.startingDayID, this.daysPerYear);
    this.currentYear--;
  }

  generatePreviousDisplayYear(): void {
    this.calcPreviousYearData();
    this.generateDisplayYear();
  }



  settingsArrived(IncomingSettings): void {
    if (IncomingSettings) {
      this.startingDayID = IncomingSettings.startingDayID;
      this.daysPerMonths = IncomingSettings.daysPerMonths;
      this.DoWNames = IncomingSettings.DoW_names;
      this.startingDoW = IncomingSettings.startingDoW;
      this.daysPerWeek = this.DoWNames.length;
      this.MonthNames = IncomingSettings.monthNames;
      this.currentYear = IncomingSettings.currentYear;
      this.settingsLoaded = true;
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      this.leapYears = IncomingSettings.leapYears;
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

  calculateYearLength(): number {
    return this.yearService.daysInYear(this.daysPerMonths, this.currentYear,
      this.leapYears);
  }
}
