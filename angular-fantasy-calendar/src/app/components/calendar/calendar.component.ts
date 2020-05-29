import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subject, Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Calendar } from 'src/app/Calendar';
import * as fromActions from '../../store/actions';
import { Year } from '../../year';
import { YearService } from '../../year.service';
import { CalendarService } from 'src/app/calendar.service';
import { selectFilter } from 'src/app/store/selectors/calendar.selector';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  @Input() set newSettings(calendar: Calendar) {
    if (!!calendar) {
      this.settingsArrived(calendar);
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

  userYearChangeSubscription: Subscription;

  eventFilter$: Observable<string[]>;

  constructor(
    private store: Store<any>,
    private yearService: YearService,
    private calendarService: CalendarService) {
      // Debounce search.
      this.userYearChangeSubscription = this.userYearChange.pipe(
        debounceTime(400),
        distinctUntilChanged())
        .subscribe(value => {
          this.jumpToYear(value);
        }
      );

      this.eventFilter$ = this.store.select(selectFilter);
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.userYearChangeSubscription) {
      this.userYearChangeSubscription.unsubscribe();
    }
  }

  settingsArrived(IncomingSettings): void {
    if (IncomingSettings) {
      this.calendar = IncomingSettings;
      this.yearStartingID = this.calendar.year.startingDayID;
      this.yearStartingDOW = this.calendar.year.startingDoW;
      this.currentEra = this.calendar.year.currentEra;
      this.currentYear = this.calendar.year.currentYear;
      if (IncomingSettings.events) {
        const newTagList = this.calendarService.generateTagList(this.calendar.events);
        this.store.dispatch(
          fromActions.CalendarActions.setTagList(
            { newTagList }
          )
        );
        this.store.dispatch(
          fromActions.CalendarActions.changeFilter(
            { newFilter: newTagList }
          )
        );
      }
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
