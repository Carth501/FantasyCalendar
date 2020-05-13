
import { Component, Input } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Calendar } from 'src/app/Calendar';
import { EventLists } from 'src/app/calendarEvent';
import { LeapYear } from 'src/app/leapYear';
import { Lookup } from 'src/app/lookup';
import { SettingsMonth } from 'src/app/settingsMonth';
import { YearMath } from 'src/app/yearMath';
import { OptionsSelectors } from '../../store/selectors';
import { CalendarService } from 'src/app/calendar.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;
  // @Output() changes = new EventEmitter<Calendar>();
  /*
  @Input() set totalSettings(totalSettingsObjects) {
    this.initializeCalendar(totalSettingsObjects);
  }
  */

  @Input() lookupArray: Lookup[];
  calendarArray: Calendar[];
  calendarObject$: Observable<Calendar>;
  yearMath$: Observable<YearMath>;
  months$: Observable<SettingsMonth[]>;
  weeks$: Observable<string[]>;
  leapYears$: Observable<LeapYear[]>;
  events$: Observable<EventLists>;

  @Input() calendarName: string;

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
    }


  initializeCalendar(calendar: Calendar): void {
    /*
    if (totalSettings) {
      this.totalSettingsObject = totalSettings;
      this.optionsArrived(this.totalSettingsObject);
    }
    */
  }

  optionsArrived(calendar: Calendar): void {
    // use a selector, copy the original from state
    // the copy will be used for editing without changes to the original.
    if (calendar) {
      if (calendar.calendarName) {
        this.calendarName = calendar.calendarName;
      }
    }
  }


  pushChanges(): void {
    // use an action for this. Replaces the original in state with
    // whatever is in options.
  }
}
