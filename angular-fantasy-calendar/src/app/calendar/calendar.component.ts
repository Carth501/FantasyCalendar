import { Component, Input, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LeapYear } from '../leapYear';
import { TotalSettings } from '../totalSettings';
import { Year } from '../year';
import { YearService } from '../year.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  @Input() set settings(totalSettings) {
    this.settingsArrived(totalSettings);
  }
  totalSettings: TotalSettings;
  settingsLoaded = false;
  eventsLoaded = false;

  currentYear: number;
  yearStartingID: number;
  yearStartingDOW: number;
  daysPerMonths: number[];
  daysPerWeek: number;
  DoWNames: string[];
  monthNames: string[];
  year: Year;
  yearLength: number;
  leapYears: LeapYear[];

  userYearChange = new Subject<number>();
  @ViewChild('newMonth') newMonth;


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

  settingsArrived(IncomingSettings): void {
    if (IncomingSettings && IncomingSettings.calendarSettings) {
      this.totalSettings = IncomingSettings;
      this.currentYear = this.totalSettings.calendarSettings.currentYear;
      this.daysPerMonths = this.totalSettings.calendarSettings.daysPerMonths;
      this.yearLength = this.yearService.sumOfMonths(this.daysPerMonths);
      this.yearStartingID = this.totalSettings.calendarSettings.startingDayID;
      this.yearStartingDOW = this.totalSettings.calendarSettings.startingDoW;
      this.DoWNames = this.totalSettings.calendarSettings.DoW_names;
      this.daysPerWeek = this.DoWNames.length;
      this.monthNames = this.totalSettings.calendarSettings.monthNames;
      this.leapYears = this.totalSettings.calendarSettings.leapYears;
      this.generateDisplayYear();
    }
  }

  generateDisplayYear(): void {
    this.yearLength = this.calculateYearLength();
    this.year = this.yearService.getDisplayYear( this.yearStartingID, this.daysPerMonths, this.yearStartingDOW, this.daysPerWeek, this.monthNames, this.currentYear, this.leapYears, this.totalSettings
      );
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
    this.yearStartingDOW = this.yearService.getNextStartingDoW(this.yearLength, this.yearStartingDOW, this.daysPerWeek);
    this.yearStartingID = this.yearService.getNextStartingID(this.yearStartingID, this.yearLength);
    this.currentYear++;
  }

  generateNextDisplayYear(): void {
    console.log('nextDisplay');
    this.calcNextYearData();
    this.generateDisplayYear();
  }

  calcPreviousYearData(): void {
    this.currentYear--;
    this.yearLength = this.calculateYearLength();
    this.yearStartingDOW = this.yearService.getPreviousStartingDoW(this.yearLength, this.yearStartingDOW, this.daysPerWeek);
    this.yearStartingID = this.yearService.getPreviousStartingID(this.yearStartingID, this.yearLength);
  }

  generatePreviousDisplayYear(): void {
    this.calcPreviousYearData();
    this.generateDisplayYear();
  }

  calculateYearLength(): number {
    return this.yearService.daysInYear(this.daysPerMonths, this.currentYear,
      this.leapYears);
  }
}
