import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from 'src/app/Calendar';
import { JsonService } from 'src/app/json.service';

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
    private clipboard: Clipboard) { }


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
    // dispatch action with new calendar object
  }
}
