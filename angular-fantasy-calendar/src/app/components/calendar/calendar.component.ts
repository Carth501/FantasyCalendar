import { Component, Input, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Era } from '../../era';
import { LeapYear } from '../../leapYear';
import { TotalSettings } from '../../totalSettings';
import { Year } from '../../year';
import { YearService } from '../../year.service';
import { SettingsMonth } from '../../settingsMonth';

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
  daysPerWeek: number;
  DoWNames: string[];
  settingsMonths: SettingsMonth[];
  year: Year;
  eras: Era[];
  currentEra: number;
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
      this.eras = this.totalSettings.calendarSettings.eras;
      this.currentEra = this.totalSettings.calendarSettings.currentEra;
      this.currentYear = this.totalSettings.calendarSettings.currentYear;
      this.yearStartingID = this.totalSettings.calendarSettings.startingDayID;
      this.yearStartingDOW = this.totalSettings.calendarSettings.startingDoW;
      this.DoWNames = this.totalSettings.calendarSettings.DoW_names;
      this.daysPerWeek = this.DoWNames.length;
      this.settingsMonths = this.totalSettings.calendarSettings.settingsMonths;
      this.yearLength = this.yearService.sumOfMonthLengths(this.settingsMonths);
      this.leapYears = this.totalSettings.calendarSettings.leapYears;
      this.generateDisplayYear();
    }
  }

  generateDisplayYear(): void {
    this.yearLength = this.calculateYearLength();
    this.year = this.yearService.getDisplayYear( this.yearStartingID,
      this.settingsMonths, this.yearStartingDOW, this.daysPerWeek,
      this.currentYear, this.leapYears, this.totalSettings
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
    this.incrementCurrentYear();
  }

  generateNextDisplayYear(): void {
    this.calcNextYearData();
    this.checkEra();
    this.generateDisplayYear();
  }

  calcPreviousYearData(): void {
    this.decrementCurrentYear();
    this.yearLength = this.calculateYearLength();
    this.yearStartingDOW = this.yearService.getPreviousStartingDoW(this.yearLength, this.yearStartingDOW, this.daysPerWeek);
    this.yearStartingID = this.yearService.getPreviousStartingID(this.yearStartingID, this.yearLength);
  }

  generatePreviousDisplayYear(): void {
    this.calcPreviousYearData();
    this.checkEra();
    this.generateDisplayYear();
  }

  checkEra(): void {
    if ( this.eras[this.currentEra].beginning) {
      if ( !this.eraReversed() ) {
        if ( this.currentYear < this.eras[this.currentEra].beginning) {
          this.currentEra--;
          this.currentYear = this.eras[this.currentEra].ending;
        }
      } else {
        if ( this.currentYear > this.eras[this.currentEra].beginning) {
          this.currentEra--;
          this.currentYear = this.eras[this.currentEra].ending;
        }
      }
    }
    if ( this.eras[this.currentEra].ending) {
      if ( !this.eraReversed() ) {
        if ( this.currentYear > this.eras[this.currentEra].ending) {
          this.currentEra++;
          this.currentYear = this.eras[this.currentEra].beginning;
        }
      } else {
        if ( this.currentYear < this.eras[this.currentEra].ending) {
          this.currentEra++;
          this.currentYear = this.eras[this.currentEra].beginning;
        }
      }
    }
  }

  calculateYearLength(): number {
    return this.yearService.daysInYear(this.settingsMonths, this.currentYear,
      this.leapYears);
  }

  eraReversed(): boolean {
    return this.eras[this.currentEra].reversed;
  }
  
  incrementCurrentYear(): void {
    if (this.eras[this.currentEra].reversed) {
      this.currentYear--;
    } else {
      this.currentYear++;
    }
  }

  decrementCurrentYear(): void {
    if (this.eras[this.currentEra].reversed) {
      this.currentYear++;
    } else {
      this.currentYear--;
    }
  }
}