import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Era } from '../../era';
import { LeapYear } from '../../leapYear';
import { Year } from '../../year';
import { YearService } from '../../year.service';
import { SettingsMonth } from '../../settingsMonth';
import * as fromSelectors from '../../store/selectors';
import { Store } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  @Input() set newSettings(calendar: Calendar) {
    if (!!calendar) {
      this.settingsArrived(calendar);
    } else {
      debugger;
    }
  }
  settingsLoaded = false;
  eventsLoaded = false;
  calendarIndex = 0;

  @Input() set changeCalendarIndex(newIndex: number) {
    if (newIndex >= 0) {

    }
  }

  @Input() calendar: Calendar;

  currentYear: number;
  yearStartingID: number;
  yearStartingDOW: number;
  yearLength: number;
  year: Year;
  currentEra: number;

  userYearChange = new Subject<number>();
  @ViewChild('newMonth') newMonth;


  constructor(
    private store: Store<any>,
    private yearService: YearService) {
      // Debounce search.
      this.userYearChange.pipe(
        debounceTime(400),
        distinctUntilChanged())
        .subscribe(value => {
          this.jumpToYear(value);
        });
      }

  ngOnInit(): void {
  }

  settingsArrived(IncomingSettings): void {
    if (IncomingSettings && IncomingSettings.calendarSettings) {
      this.calendar = IncomingSettings;
      this.yearStartingID = this.calendar.year.startingDayID;
      this.yearStartingDOW = this.calendar.year.startingDoW;
      this.currentEra = this.calendar.year.currentEra;
      this.currentYear = this.calendar.year.currentYear;
      this.generateDisplayYear();
    }
  }

  generateDisplayYear(): void {
    this.yearLength = this.calculateYearLength();
    this.year = this.yearService.getDisplayYear( this.yearStartingID,
      this.yearStartingDOW, this.currentYear, this.calendar
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
    this.yearStartingDOW = this.yearService.getNextStartingDoW(this.yearLength, this.yearStartingDOW, this.calendar.DoW.length);
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
    this.yearStartingDOW = this.yearService.getPreviousStartingDoW(this.yearLength, this.yearStartingDOW, this.calendar.DoW.length);
    this.yearStartingID = this.yearService.getPreviousStartingID(this.yearStartingID, this.yearLength);
  }

  generatePreviousDisplayYear(): void {
    this.calcPreviousYearData();
    this.checkEra();
    this.generateDisplayYear();
  }

  checkEra(): void {
    const eras = this.calendar.year.eras;
    if ( eras[this.currentEra].beginning) {
      if ( !this.eraReversed() ) {
        if ( this.currentYear < eras[this.currentEra].beginning) {
          this.currentEra--;
          this.currentYear = eras[this.currentEra].ending;
        }
      } else {
        if ( this.currentYear > eras[this.currentEra].beginning) {
          this.currentEra--;
          this.currentYear = eras[this.currentEra].ending;
        }
      }
    }
    if ( eras[this.currentEra].ending) {
      if ( !this.eraReversed() ) {
        if ( this.currentYear > eras[this.currentEra].ending) {
          this.currentEra++;
          this.currentYear = eras[this.currentEra].beginning;
        }
      } else {
        if ( this.currentYear < eras[this.currentEra].ending) {
          this.currentEra++;
          this.currentYear = eras[this.currentEra].beginning;
        }
      }
    }
  }

  calculateYearLength(): number {
    return this.yearService.daysInYear(this.calendar, this.currentYear);
  }

  eraReversed(): boolean {
    return this.calendar.year.eras[this.currentEra].reversed;
  }

  incrementCurrentYear(): void {
    if (this.calendar.year.eras[this.currentEra].reversed) {
      this.currentYear--;
    } else {
      this.currentYear++;
    }
  }

  decrementCurrentYear(): void {
    if (this.calendar.year.eras[this.currentEra].reversed) {
      this.currentYear++;
    } else {
      this.currentYear--;
    }
  }
}
