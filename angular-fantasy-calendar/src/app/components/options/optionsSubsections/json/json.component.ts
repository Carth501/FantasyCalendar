import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from 'src/app/Calendar';
import { JsonService } from 'src/app/json.service';
import { pushCalendar } from 'src/app/store/actions/calendar.actions';
import { CalendarService } from 'src/app/calendar.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {

  @Input() set calendar(calendar: Calendar) {
    this.jsonSave = this.jsonService.calendarToJSON(calendar);
  }
  jsonSave: string;

  @Input() fromjson: string;

  constructor(
    private jsonService: JsonService,
    private clipboard: Clipboard,
    private store: Store) { }


  clipboardJSON(): void {
    const pending = this.clipboard.beginCopy(this.jsonSave);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }

  newUserJSON(): void {
    this.store.dispatch(pushCalendar({newCalendar: this.jsonService.JSONToCalendar(this.fromjson)}));
  }
}
