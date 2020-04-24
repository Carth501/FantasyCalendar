import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { CyclicalEvent, MonthlyDayOfWeekEvent, MonthlyEvent, WeeklyEvent,
  YearlyEvent, YearlyMonthlyDayOfWeekEvent, UniqueEvent, YearlyMonthlyEvent } from '../calendarEvent';
import { EMPTY_LEAP_YEAR, LeapYear } from '../leapYear';
import { TotalSettings } from '../totalSettings';
import { YearService } from '../year.service';

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

  @Input() cyclicalEvents: CyclicalEvent[];
  @Input() uniqueEvents: UniqueEvent[];
  @Input() weeklyEvents: WeeklyEvent[];
  @Input() monthlyEvents: MonthlyEvent[];
  @Input() yearlyEvents: YearlyEvent[];
  @Input() monthDOWEvents: MonthlyDayOfWeekEvent[];
  @Input() yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
  @Input() yearlyMonthlyEvents: YearlyMonthlyEvent[];

  constructor(
    private yearService: YearService,
    private clipboard: Clipboard
    ) { }


  settingsArrived(totalSettings: TotalSettings): void {
    this.jsonSave = JSON.stringify(totalSettings);
    this.totalSettingsObject = totalSettings;
    this.optionsArrived(totalSettings);
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
      if (totalSettings.cyclicalEvents) {
        this.cyclicalEvents = totalSettings.cyclicalEvents;
      }
      if (totalSettings.weeklyEvents) {
        this.weeklyEvents = totalSettings.weeklyEvents;
      }
      if (totalSettings.monthlyEvents) {
        this.monthlyEvents = totalSettings.monthlyEvents;
      }
      if (totalSettings.yearlyEvents) {
        this.yearlyEvents = totalSettings.yearlyEvents;
      }
      if (totalSettings.monthDOWEvents) {
        this.monthDOWEvents = totalSettings.monthDOWEvents;
      }
      if (totalSettings.yearMonthDOWEvents) {
        this.yearMonthDOWEvents = totalSettings.yearMonthDOWEvents;
      }
    }
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
        leapYears: this.leapYears,

      },
      cyclicalEvents: this.cyclicalEvents,
      uniqueEvents: this.uniqueEvents,
      weeklyEvents: this.weeklyEvents,
      monthlyEvents: this.monthlyEvents,
      yearlyEvents: this.yearlyEvents,
      monthDOWEvents: this.monthDOWEvents,
      yearMonthDOWEvents: this.yearMonthDOWEvents,
      yearlyMonthlyEvents: this.yearlyMonthlyEvents
    };
    this.changes.emit(this.totalSettingsObject);
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

  createNewCyclicalEvent(newEvent: CyclicalEvent) {
    this.cyclicalEvents.push(newEvent);
  }

  createNewUniqueEvent(newEvent: UniqueEvent) {
    this.uniqueEvents.push(newEvent);
  }

  createNewYearlyEvent(newEvent: YearlyEvent) {
    this.yearlyEvents.push(newEvent);
  }

  createNewMonthlyEvent(newEvent: MonthlyEvent) {
    this.monthlyEvents.push(newEvent);
  }

  createNewWeeklyEvent(newEvent: WeeklyEvent) {
    this.weeklyEvents.push(newEvent);
  }

  createNewMonthDOWEvent(newEvent: MonthlyDayOfWeekEvent) {
    this.monthDOWEvents.push(newEvent);
  }

  createNewYearMonthDOWEvent(newEvent: YearlyMonthlyDayOfWeekEvent) {
    this.yearMonthDOWEvents.push(newEvent);
  }

  createNewYearlyMonthlyEvent(newEvent: YearlyMonthlyEvent) {
    this.yearlyMonthlyEvents.push(newEvent);
  }

  deleteCyclicalEvent(index: number): void {
    if (index >= 0) {
      this.cyclicalEvents.splice(index, 1);
    }
  }

  deleteUniqueEvent(index: number): void {
    if (index >= 0) {
      this.uniqueEvents.splice(index, 1);
    }
  }

  deleteYearlyEvent(index: number): void {
    if (index >= 0) {
      this.yearlyEvents.splice(index, 1);
    }
  }

  deleteMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.monthlyEvents.splice(index, 1);
    }
  }

  deleteWeeklyEvent(index: number): void {
    if (index >= 0) {
      this.weeklyEvents.splice(index, 1);
    }
  }

  deleteMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.monthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthDOWEvent(index: number): void {
    if (index >= 0) {
      this.yearMonthDOWEvents.splice(index, 1);
    }
  }

  deleteYearMonthlyEvent(index: number): void {
    if (index >= 0) {
      this.yearlyMonthlyEvents.splice(index, 1);
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

  toggleSettingsSidebar(): void {
    this.hideSettings = !this.hideSettings;
  }
}
