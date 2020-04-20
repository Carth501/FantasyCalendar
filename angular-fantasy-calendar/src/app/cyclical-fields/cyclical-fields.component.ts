import { Component, OnInit, Input } from '@angular/core';
import { CyclicalEvent } from '../calendarEvent';

@Component({
  selector: 'app-cyclical-fields',
  templateUrl: './cyclical-fields.component.html',
  styleUrls: ['./cyclical-fields.component.css']
})
export class CyclicalFieldsComponent {

  @Input() set addEvent(event) {
    this.cyclicalEvent = event as CyclicalEvent;
  }
  cyclicalEvent: CyclicalEvent;
  @Input() editable = false;
}
