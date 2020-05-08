import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { CalendarService } from '../../calendar.service';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
  YearlyMonthlyEvent, YearlyMonthlyDayOfWeekEvent, UniqueEvent, MonthlyDayOfWeekEvent } from '../../calendarEvent';
import { TotalSettings } from '../../totalSettings';
import { CalendarEventService } from '../../calendar-event.service';
import { Store } from '@ngrx/store';
import { toggleOptions, setNewEventPanel } from 'src/app/store/actions/view.actions';
import * as fromSelectors from '../../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  faArrowAltCircleUp = faArrowAltCircleUp;
  faBars = faBars;

  // View component no longer has total settings.
  // Those are in store. Aquire with the calendar Selector.

  newEventPanelIsOpen: Observable<boolean>;
  newEventDayID: Observable<number>;
  currentCalendar$: Observable<TotalSettings[]>;

  calendarIndex = 0;

  optionsAreOpen: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService
    ) {
      this.optionsAreOpen = this.store.select(fromSelectors.ViewSelectors.selectOptionsOpen);
      this.newEventPanelIsOpen = this.store.select(fromSelectors.ViewSelectors.selectNewEventOpen);
      this.newEventDayID = this.store.select(fromSelectors.ViewSelectors.selectNewEventDayID);
      this.currentCalendar$ = this.store.select(fromSelectors.CalendarSelectors.selectTotalSettings);
    }

  ngOnInit(): void {
    // this.store.dispatch({ type: '[View] Load TotalSettings})
    this.getDefaultSettings();
  }

  getDefaultSettings(): void {
    this.store.dispatch({ type: '[Calendar Page] Load Calendar' });
  }
/*
  recieveCalendars(calendars: TotalSettings[]): void {
    this.calendars = calendars;
    this.splitSettings(this.calendars[this.calendarIndex]);
  }

  splitSettings(totalSettings: TotalSettings): void {
    this.totalSettings = totalSettings;
  }

  viewCalendarSwitch(index: number): void {
    this.calendarIndex = index;
    console.log('viewCalendarSwitch ' + this.calendarIndex);
    this.splitSettings(this.calendars[this.calendarIndex]);
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  newTotalSettings(newSettings: string): void {
    this.totalSettings = JSON.parse(newSettings);
    this.splitSettings(this.totalSettings);
  }

  createNewCyclicalEvent(newEvent: CyclicalEvent): void {
    const tempEventArray = this.totalSettings.cyclicalEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, cyclicalEvents: tempEventArray};
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent): void {
    const tempEventArray = this.totalSettings.weeklyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, weeklyEvents: tempEventArray};
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent): void {
    const tempEventArray = this.totalSettings.monthlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, monthlyEvents: tempEventArray};
  }

  createNewYearlyEvent(newEvent: YearlyEvent): void {
    const tempEventArray = this.totalSettings.yearlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearlyEvents: tempEventArray};
  }

  createNewMonthlyDOWEvent(newEvent: MonthlyDayOfWeekEvent): void {
    const tempEventArray = this.totalSettings.monthDOWEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, monthDOWEvents: tempEventArray};
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent): void {
    const tempEventArray = this.totalSettings.yearlyMonthlyEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearlyMonthlyEvents: tempEventArray};
  }

  createNewYearlyMonthlyDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent): void {
    const tempEventArray = this.totalSettings.yearMonthDOWEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, yearMonthDOWEvents: tempEventArray};
  }

  createNewUniqueEvent(newEvent: UniqueEvent): void {
    const tempEventArray = this.totalSettings.uniqueEvents.slice();
    tempEventArray.push(newEvent);
    this.totalSettings = {...this.totalSettings, uniqueEvents: tempEventArray};
  }
*/
  closeEventWindow(): void {
    this.store.dispatch(setNewEventPanel({open: false, dayID: 0}));
  }

  toggleSettingsSidebar(): void {
    this.store.dispatch(toggleOptions({}));
  }
}
