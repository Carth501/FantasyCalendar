
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { OptionsSelectors } from '../../store/selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;
  //@Output() changes = new EventEmitter<Calendar>();
  /*
  @Input() set totalSettings(totalSettingsObjects) {
    this.initializeCalendar(totalSettingsObjects);
  }
  */

  calendarArray: Calendar[];
  calendarObject$: Observable<Calendar>;


  @Input() calendarName: string;

  constructor(
    private store: Store<any>,
    ) {
      this.calendarObject$ = this.store.select(OptionsSelectors.selectCurrentCalendar);
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
