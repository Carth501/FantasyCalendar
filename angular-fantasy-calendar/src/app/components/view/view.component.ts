import { Component, OnDestroy, OnInit } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Calendar } from 'src/app/Calendar';
import { Lookup } from 'src/app/lookup';
import { CalendarActions } from 'src/app/store/actions';
import { toggleFilterPanel } from 'src/app/store/actions/calendar.actions';
import { changeCalendar, setNewEventPanel, toggleOptions } from 'src/app/store/actions/view.actions';
import { CalendarEventService } from '../../calendar-event.service';
import { CalendarService } from '../../calendar.service';
import * as fromSelectors from '../../store/selectors';
import { CalendarSelectors } from '../../store/selectors';

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
  filter$: Observable<string[]>;
  tagList$: Observable<string[]>;
  openFilterPanel$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService
    ) {
      this.optionsAreClosed$ = this.store.select(fromSelectors.ViewSelectors.selectOptionsClosed);
      this.newEventPanelIsOpen = this.store.select(fromSelectors.ViewSelectors.selectNewEventOpen);
      this.newEventDayID = this.store.select(fromSelectors.ViewSelectors.selectNewEventDayID);
      this.calendarList$ = this.store.select(CalendarSelectors.selectCalendars);
      this.currentCalendar$ = this.calendarService.getCurrentCalendar$();
      this.currentCalendarSubscription = this.currentCalendar$.subscribe(
        activeCalendar => this.store.dispatch(CalendarActions.setActiveCalendar({activeCalendar}))
      );
      this.calendarKeyValuePairs$ = this.calendarService.getCalendarKVP$();
      this.calendarID$ = this.store.select(fromSelectors.ViewSelectors.selectCalendarIndex);
      this.openFilterPanel$ = this.store.select(fromSelectors.CalendarSelectors.selectOpenFilterPanel);
    }

  ngOnInit(): void {
    // this.store.dispatch({ type: '[View] Load TotalSettings})
    this.getDefaultSettings();
    this.tagList$ = this.store.select(fromSelectors.CalendarSelectors.selectTagList).pipe(
      delay(0)
    );
    this.filter$ = this.store.select(fromSelectors.CalendarSelectors.selectFilter).pipe(
      delay(0)
    );
  }

  ngOnDestroy(): void {
    if (this.currentCalendarSubscription) {
      this.currentCalendarSubscription.unsubscribe();
    }
  }

  toggleFilterPanel(): void {
    this.store.dispatch(toggleFilterPanel({}));
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

  switchCalendar(index: number): void {
    this.store.dispatch(changeCalendar({calendarIndex: index}));
  }
}
