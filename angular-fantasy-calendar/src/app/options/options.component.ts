import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { EMPTY_LEAP_YEAR, LeapYear } from '../leapYear';
import { TotalSettings } from '../totalSettings';
import { YearService } from '../year.service';
import { CalendarEvent, EMPTY_EVENT } from '../calendarEvent';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;
  faBars = faBars;
  daysPerWeek;
  @Input() DoW_names: string[];
  @Input() MonthNames: string[];
  @Input() daysPerMonths: number[];
  daysPerYear: number;
  hideSettings = true;
  @Output() changes = new EventEmitter<TotalSettings>();
  @Input() currentYear: number;
  @Input() newDoWName: string;
  @Input() leapYears: LeapYear[];
  @Input() candidateLY = EMPTY_LEAP_YEAR;
  @Input() set totalSettings(totalSettingsObject) {
    this.settingsArrived(totalSettingsObject);
  }
  totalSettingsObject: TotalSettings;

  @Input() jsonSave: string;

  @Input() fromjson: string;
  @Output() readNewjson = new EventEmitter<string>();

  @Input() eventArray: CalendarEvent[];
  potentialEvent = EMPTY_EVENT;

  constructor(
    private yearService: YearService,
    private clipboard: Clipboard
    ) { }


  toggleSettingsSidebar(): void {
    this.hideSettings = !this.hideSettings;
  }

  pushChanges(): void {
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    this.totalSettingsObject = {
      calendarSettings: {
        ...this.totalSettingsObject.calendarSettings,
        DoW_names: this.DoW_names.slice(),
        monthNames: this.MonthNames.slice(),
        daysPerMonths: this.daysPerMonths.slice(),
        currentYear: this.currentYear,
        leapYears: this.leapYears
      },
      eventArray: this.eventArray
    };
    this.changes.emit(this.totalSettingsObject);
  }

  optionsArrived(totalSettings: TotalSettings): void {
    if (totalSettings) {
      if (totalSettings.calendarSettings) {
        this.DoW_names = totalSettings.calendarSettings.DoW_names;
        this.daysPerWeek = this.DoW_names.length;
        this.MonthNames = totalSettings.calendarSettings.monthNames;
        this.daysPerMonths = totalSettings.calendarSettings.daysPerMonths;
        this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
        this.currentYear = totalSettings.calendarSettings.currentYear;
        this.leapYears = totalSettings.calendarSettings.leapYears;
      }
      if (totalSettings.eventArray) {
        this.eventArray = totalSettings.eventArray;
      }
    }
  }

  addMonth(): void {
    const newMonthInput = document.getElementById('new-month-field') as HTMLInputElement;
    if (newMonthInput.value) {
      this.MonthNames.push(newMonthInput.value);
      this.daysPerMonths.push(1);
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      newMonthInput.value = '';
    }
  }

  deleteMonth(index: number): void {
    if (index >= 0) {
      this.daysPerMonths.splice(index, 1);
      this.MonthNames.splice(index, 1);
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    }
  }

  addDoW(): void {
    this.DoW_names.push(this.newDoWName);
    this.newDoWName = '';
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW_names.splice(index, 1);
      this.daysPerWeek = this.DoW_names.length;
    }
  }

  addEvent(): void {
    if (this.potentialEvent && this.eventArray) {
      if (
        this.potentialEvent.dateID &&
        this.potentialEvent.duration &&
        this.potentialEvent.repeatDays &&
        this.potentialEvent.title
        ) {
          this.potentialEvent.repeatAnnual = false;
          // annual repetition not implemented
          this.potentialEvent.eventID = this.eventArray.length;
          this.eventArray.push(this.potentialEvent);
          this.potentialEvent.dateID = null;
          this.potentialEvent.duration = null;
          this.potentialEvent.eventID = null;
          this.potentialEvent.repeatDays = null;
          this.potentialEvent.title = null;
      }
    }
  }

  deleteEvent(index: number): void {
    if (index >= 0) {
      this.eventArray.splice(index, 1);
    }
  }

  addLY(): void {
    this.leapYears.push(this.candidateLY);
    this.candidateLY = {
      leapYearCycles: null,
      leapYearOffset: null,
      leapYearChange: null,
      leapDayMonth: null
    };
  }

  deleteLY(index: number): void {
    if (index >= 0) {
      this.leapYears.splice(index, 1);
    }
  }

  trackArray(index, item) {
    return index;
  }

  settingsArrived(totalSettings: TotalSettings): void {
    this.jsonSave = JSON.stringify(totalSettings);
    this.totalSettingsObject = totalSettings;
    this.optionsArrived(totalSettings);
  }

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
    this.readNewjson.emit(this.fromjson);
  }
}
