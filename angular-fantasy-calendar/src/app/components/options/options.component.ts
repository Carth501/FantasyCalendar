import { Component, Input, OnDestroy } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Calendar } from 'src/app/Calendar';
import { EventLists } from 'src/app/calendarEvent';
import { LeapYear } from 'src/app/leapYear';
import { Lookup } from 'src/app/lookup';
import { SettingsMonth } from 'src/app/settingsMonth';
import { YearMath } from 'src/app/yearMath';
import { OptionsSelectors, CalendarSelectors } from '../../store/selectors';
import { CalendarService } from 'src/app/calendar.service';
import { OptionsActions, CalendarActions } from 'src/app/store/actions';
import * as _ from 'lodash';
import { toggleOptions } from 'src/app/store/actions/view.actions';
import { selectYearOptionsOpen, selectMonthOptionsOpen, selectWeekOptionsOpen, selectLeapYearOptionsOpen, selectEventOptionsOpen, selectJSONOptionsOpen } from 'src/app/store/selectors/options.selector';
import { toggleYearOptions, toggleMonthOptions, toggleWeekOptions, toggleLeapYearOptions, toggleEventOptions, toggleJSONOptions } from 'src/app/store/actions/options.actions';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnDestroy {
  faArrowAltCircleUp = faArrowAltCircleUp;
  // @Output() changes = new EventEmitter<Calendar>();
  /*
  @Input() set totalSettings(totalSettingsObjects) {
    this.initializeCalendar(totalSettingsObjects);
  }
  */

  @Input() lookupArray: Lookup[];
  calendarObject$: Observable<Calendar>;
  yearMath$: Observable<YearMath>;
  months$: Observable<SettingsMonth[]>;
  weeks$: Observable<string[]>;
  leapYears$: Observable<LeapYear[]>;
  events$: Observable<EventLists>;
  activeCalendarSubscription: Subscription;

  @Input() calendarName: string;

  yearOpen$: Observable<boolean>;
  monthOpen$: Observable<boolean>;
  weekOpen$: Observable<boolean>;
  leapYearOpen$: Observable<boolean>;
  eventOpen$: Observable<boolean>;
  jsonOpen$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private calendarService: CalendarService
    ) {
      this.calendarObject$ = this.calendarService.getCurrentCalendar$();
      this.yearMath$ = this.calendarObject$.pipe(
        map(calendar => calendar.year)
      );
      this.months$ = this.calendarObject$.pipe(
        map(calendar => calendar.months)
      );
      this.weeks$ = this.calendarObject$.pipe(
        map(calendar => calendar.DoW)
      );
      this.leapYears$ = this.calendarObject$.pipe(
        map(calendar => calendar.leapYearRules)
      );
      this.events$ = this.calendarObject$.pipe(
        map(calendar => calendar.events)
      );
      this.activeCalendarSubscription = this.store.select
      (CalendarSelectors.selectActiveCalendar).subscribe
        (activeCalendar => this.store.dispatch
          (OptionsActions.setDirtyCalendar
            ({calendar: activeCalendar})
          )
        );
        /*
        // Debounce search.
        this.userYearChangeSubscription = this.userYearChange.pipe(
          debounceTime(400),
          distinctUntilChanged())
          .subscribe(value => {
            this.jumpToYear(value);
          });
          */
      this.yearOpen$ = this.store.select(selectYearOptionsOpen);
      this.monthOpen$ = this.store.select(selectMonthOptionsOpen);
      this.weekOpen$ = this.store.select(selectWeekOptionsOpen);
      this.leapYearOpen$ = this.store.select(selectLeapYearOptionsOpen);
      this.eventOpen$ = this.store.select(selectEventOptionsOpen);
      this.jsonOpen$ = this.store.select(selectJSONOptionsOpen);
    }

    ngOnDestroy(): void {
      if (this.activeCalendarSubscription) {
        this.activeCalendarSubscription.unsubscribe();
      }
    }

  pushChanges(): void {
    this.store.select(OptionsSelectors.selectDirtyCalendar).pipe(
      first()
    ).subscribe(newCalendar =>
      this.store.dispatch(CalendarActions.pushCalendar({newCalendar}))
    );
    this.store.dispatch(toggleOptions({}));
  }

  toggleYearOptions(): void {
    this.store.dispatch(toggleYearOptions({}));
  }

  toggleMonthOptions(): void {
    this.store.dispatch(toggleMonthOptions({}));
  }

  toggleWeekOptions(): void {
    this.store.dispatch(toggleWeekOptions({}));
  }

  toggleLeapYearOptions(): void {
    this.store.dispatch(toggleLeapYearOptions({}));
  }

  toggleEventOptions(): void {
    this.store.dispatch(toggleEventOptions({}));
  }

  toggleJSONOptions(): void {
    this.store.dispatch(toggleJSONOptions({}));
  }
}
