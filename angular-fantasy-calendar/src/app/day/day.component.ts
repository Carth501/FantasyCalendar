import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../day';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  constructor(private calendarEventService: CalendarEventService) {}

  @Input() day: Day;
  @Output() dayClick = new EventEmitter<number>();

  click(dayID: number): void {
    this.calendarEventService.dayClick(dayID);
  }
}
