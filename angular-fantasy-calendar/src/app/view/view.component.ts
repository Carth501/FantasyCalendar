import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarSettings } from '../calendarSettings';
import { CalendarEvent } from '../calendarEvent';
import { OptionsSettings } from '../optionsSettings';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  faArrowAltCircleUp = faArrowAltCircleUp;

  calendarSettings: CalendarSettings;
  eventArray: CalendarEvent[];
  optionsSettings: OptionsSettings;

  constructor(
    private calendarService: CalendarService
    ) { }

  ngOnInit(): void {
    this.getSettings();
    this.getEvents();
  }

  getSettings(): void {
    this.calendarService.requestCalendarSettings().subscribe(IncomingSettings => this.splitSettings(IncomingSettings));
  }

  splitSettings(calendarSettings: CalendarSettings) {
    this.calendarSettings = calendarSettings;
    this.optionsSettings = {
      daysPerMonths: calendarSettings.daysPerMonths.slice(),
      DoWNames: calendarSettings.DoW_names.slice(),
      monthNames: calendarSettings.monthNames.slice(),
      currentYear: calendarSettings.currentYear
    };
  }

  getEvents(): void {
    this.calendarService.requestEvents().subscribe(IncomingEvents => this.eventArray = IncomingEvents);
  }

  updateCalendar(newSettings: OptionsSettings): void {
    this.calendarSettings = {
      startingDayID: this.calendarSettings.startingDayID,
      daysPerMonths: newSettings.daysPerMonths,
      startingDoW: this.calendarSettings.startingDoW,
      DoW_names: newSettings.DoWNames,
      monthNames: newSettings.monthNames,
      currentYear: newSettings.currentYear,
      leapYearCycles: this.calendarSettings.leapYearCycles,
      leapYearChange: this.calendarSettings.leapYearChange,
      leapYearOffset: this.calendarSettings.leapYearOffset,
      leapDayMonth: this.calendarSettings.leapDayMonth
    };
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }
}
