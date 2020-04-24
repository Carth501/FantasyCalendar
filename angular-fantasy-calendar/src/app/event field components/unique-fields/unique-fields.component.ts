import { Component, Input } from '@angular/core';
import { UniqueEvent } from 'src/app/calendarEvent';

@Component({
  selector: 'app-unique-fields',
  templateUrl: './unique-fields.component.html',
  styleUrls: ['./unique-fields.component.css']
})
export class UniqueFieldsComponent {

  @Input() set addEvent(event) {
    this.uniqueEvent = event as UniqueEvent;
  }
  uniqueEvent: UniqueEvent;
  @Input() editable = false;

}
