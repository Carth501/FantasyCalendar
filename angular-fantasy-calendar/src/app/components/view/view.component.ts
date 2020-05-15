import { Component, OnInit, OnDestroy } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../../calendar.service';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  YearlyMonthlyEvent, YearlyMonthlyDayOfWeekEvent, UniqueEvent, MonthlyDayOfWeekEvent } from '../../calendarEvent';
import { CalendarEventService } from '../../calendar-event.service';
import { Store } from '@ngrx/store';
import { toggleOptions, setNewEventPanel } from 'src/app/store/actions/view.actions';
import * as fromSelectors from '../../store/selectors';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CalendarSelectors } from '../../store/selectors';
import { Calendar } from 'src/app/Calendar';
import { Lookup } from 'src/app/lookup';
import { KeyValuePairsService } from 'src/app/key-value-pairs.service';
import { CalendarActions } from 'src/app/store/actions';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {


  faArrowAltCircleUp = faArrowAltCircleUp;
  faBars = faBars;

  // View component no longer has total settings.
  // Those are in store. Aquire with the calendar Selector.

  newEventPanelIsOpen: Observable<boolean>;
  newEventDayID: Observable<number>;
  currentCalendar$: Observable<Calendar>;
  calendarList$: Observable<Calendar[]>;
  calendarKeyValuePairs$: Observable<Lookup[]>;
  currentCalendarSubscription: Subscription;
  calendarID$: Observable<number>;

  optionsAreClosed$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService,
    private keyValuePairsService: KeyValuePairsService
    ) {
      this.optionsAreClosed$ = this.store.select(fromSelectors.ViewSelectors.selectOptionsClosed);
      this.newEventPanelIsOpen = this.store.select(fromSelectors.ViewSelectors.selectNewEventOpen);
      this.newEventDayID = this.store.select(fromSelectors.ViewSelectors.selectNewEventDayID);
      this.calendarList$ = this.store.select(CalendarSelectors.selectCalendars);
      this.currentCalendar$ = this.calendarService.getCurrentCalendar$();
      this.currentCalendarSubscription = this.currentCalendar$.subscribe(
        activeCalendar => this.store.dispatch(CalendarActions.setActiveCalendar({activeCalendar}))
      );
      this.calendarKeyValuePairs$ = this.getCalendarKVP$();
      this.calendarID$ = this.store.select(fromSelectors.ViewSelectors.selectCalendarIndex);
    }

  getCalendarKVP$(): Observable<Lookup[]> {
    return this.calendarKeyValuePairs$ = this.calendarList$.pipe(
      map(calendars =>
        this.keyValuePairsService.pullLookupsFromCalendarList(calendars))
    );
  }

  ngOnInit(): void {
    // this.store.dispatch({ type: '[View] Load TotalSettings})
    this.getDefaultSettings();
  }

  ngOnDestroy(): void {
    if (this.currentCalendarSubscription) {
      this.currentCalendarSubscription.unsubscribe();
    }
  }

  getDefaultSettings(): void {
    this.store.dispatch({ type: '[Calendar Page] Load Calendar' });
  }

  closeEventWindow(): void {
    this.store.dispatch(setNewEventPanel({open: false, dayID: 0}));
  }

  toggleSettingsSidebar(): void {
    this.store.dispatch(toggleOptions({}));
  }
}
