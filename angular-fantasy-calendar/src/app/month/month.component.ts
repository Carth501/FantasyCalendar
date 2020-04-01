import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendarEvent';
import { DefaultDaysOfTheWeek } from '../models/days-of-the-week';
import { Month } from '../month';
import { MonthService } from '../month.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  month: Month;
  @Input() startingDayID = 89424;
  @Input() monthLength = 31;
  @Input() startingDoW = DefaultDaysOfTheWeek.Tuesday;
  eventArray: CalendarEvent[];
  DoW = DefaultDaysOfTheWeek;

  ngOnInit() {
    this.getEvents();
    this.generateDisplayMonth();
  }

  constructor(private monthService: MonthService) {}

  generateDisplayMonth(): void {
    this.month = this.monthService.getDisplayMonth(this.startingDayID, this.monthLength, this.startingDoW, this.eventArray);
  }

  generateNextDisplayMonth(): void {
    this.startingDoW = this.monthService.getNextStartingDoW(this.monthLength, this.startingDoW);
    this.startingDayID = this.monthService.getNextStartingID(this.startingDayID, this.monthLength);
    this.generateDisplayMonth();
  }

  generatePreviousDisplayMonth(): void {
    this.startingDoW = this.monthService.getPreviousStartingDoW(this.monthLength, this.startingDoW);
    this.startingDayID = this.monthService.getPreviousStartingID(this.startingDayID, this.monthLength);
    this.generateDisplayMonth();
  }

  getEvents(): void {
    this.monthService.requestEvents().subscribe(IncomingEvents => this.eventsArrived(IncomingEvents));
  }
  
  eventsArrived(IncomingEvents): void {
    this.eventArray = IncomingEvents;
    this.generateDisplayMonth();
  }
}
