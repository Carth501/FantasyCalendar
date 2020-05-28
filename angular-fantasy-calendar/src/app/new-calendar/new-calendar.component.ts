import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Calendar } from '../Calendar';
import { CalendarService } from '../calendar.service';
import { Lookup } from '../lookup';
import { pushCalendar } from '../store/actions/calendar.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.css']
})
export class NewCalendarComponent implements OnInit {

  calendarKeyValuePairs$: Observable<Lookup[]>;
  copyTarget$: Observable<Calendar>;
  @Input() newCalendarName: string;
  @Input() newNameHighlighted = false;

  constructor(
    private store: Store,
    private calendarService: CalendarService) {
    this.calendarKeyValuePairs$ = this.calendarService.getCalendarKVP$();
    this.copyTarget$ = this.calendarService.getCurrentCalendar$();
  }

  ngOnInit(): void {
  }

  changeCopyTarget(id: number): void {
    this.copyTarget$ = this.calendarService.getCalendarByID$(id);
  }

  copyTargetCalendar(): void {
    if (!!this.newCalendarName) {
      this.copyTarget$.pipe(
        first()
      ).subscribe(
        target => this.processNewCalendar(_.cloneDeep(target)));
    } else {
      this.newNameHighlighted = true;
    }
  }

  processNewCalendar(target: Calendar): void {
    target.calendarID = uuidv4();
    target.calendarName = this.newCalendarName;
    const newCalendar = target;
    this.store.dispatch(pushCalendar({newCalendar}));
    this.newNameHighlighted = false;
    this.newCalendarName = '';
  }
}
