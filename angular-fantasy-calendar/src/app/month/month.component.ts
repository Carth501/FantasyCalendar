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
  DoW = DefaultDaysOfTheWeek;

  ngOnInit() {
    this.monthService.setEvents();
    this.generateDisplayMonth();
  }

  constructor(private monthService: MonthService) {}

  generateDisplayMonth(): void {
    this.month = this.monthService.getDisplayMonth(this.startingDayID, this.monthLength, this.startingDoW);
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
}
