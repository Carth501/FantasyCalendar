import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { CyclicalEvent, MonthlyDayOfWeekEvent, MonthlyEvent, UniqueEvent, WeeklyEvent, YearlyEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent } from '../../calendarEvent';
import { EMPTY_ERA, Era } from '../../era';
import { EMPTY_LEAP_YEAR, LeapYear } from '../../leapYear';
import { SettingsMonth } from '../../settingsMonth';
import { TotalSettings } from '../../totalSettings';
import { YearService } from '../../year.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;
  daysPerWeek;
  @Input() DoW_names: string[];
  @Input() settingsMonths: SettingsMonth[];
  daysPerYear: number;
  @Output() changes = new EventEmitter<TotalSettings>();
  @Input() currentYear: number;
  @Input() newDoWName: string;
  @Input() leapYears: LeapYear[];
  @Input() candidateLY = EMPTY_LEAP_YEAR;
  @Input() set totalSettings(totalSettingsObjects) {
    this.settingsArrived(totalSettingsObjects);
  }
  @Input() set setCalendarIndex(calendarIndex) {
    this.initializeCalendar(calendarIndex);
  }
  totalSettingsArray: TotalSettings[];
  totalSettingsObject: TotalSettings;

  @Input() jsonSave: string;

  @Input() fromjson: string;
  @Output() readNewjson = new EventEmitter<string>();
  @Output() switchTo = new EventEmitter<number>();

  @Input() calendarName: string;
  @Input() cyclicalEvents: CyclicalEvent[];
  @Input() uniqueEvents: UniqueEvent[];
  @Input() weeklyEvents: WeeklyEvent[];
  @Input() monthlyEvents: MonthlyEvent[];
  @Input() yearlyEvents: YearlyEvent[];
  @Input() monthDOWEvents: MonthlyDayOfWeekEvent[];
  @Input() yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
  @Input() yearlyMonthlyEvents: YearlyMonthlyEvent[];
  @Input() eras: Era[];
  @Input() newEra = EMPTY_ERA;
  @Input() newEraIndex: number;
  @Input() currentEra: number;

  constructor(
    private yearService: YearService,
    private clipboard: Clipboard
    ) { }

  changeCalendar(change: MatSelectChange): void {
    this.switchTo.emit(change.value);
    this.initializeCalendar(change.value);
  }

  settingsArrived(totalSettings: TotalSettings[]): void {
    this.totalSettingsArray = totalSettings;
    this.initializeCalendar(0);
  }

  initializeCalendar(index: number): void {
    if (this.totalSettingsArray) {
      this.totalSettingsObject = this.totalSettingsArray[index];
      this.jsonSave = JSON.stringify(this.totalSettingsObject);
      this.optionsArrived(this.totalSettingsObject);
    }
  }

  optionsArrived(totalSettings: TotalSettings): void {
    if (totalSettings) {
      if (totalSettings.calendarName) {
        this.calendarName = totalSettings.calendarName;
      }
      if (totalSettings.calendarSettings) {
        this.DoW_names = totalSettings.calendarSettings.DoW_names;
        this.daysPerWeek = this.DoW_names.length;
        this.settingsMonths = totalSettings.calendarSettings.settingsMonths;
        this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
        this.currentYear = totalSettings.calendarSettings.currentYear;
        this.leapYears = totalSettings.calendarSettings.leapYears;
        this.eras = totalSettings.calendarSettings.eras;
        this.currentEra = totalSettings.calendarSettings.currentEra;
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
      if (totalSettings.yearlyMonthlyEvents) {
        this.yearlyMonthlyEvents = totalSettings.yearlyMonthlyEvents;
      }
      if (totalSettings.uniqueEvents) {
        this.uniqueEvents = totalSettings.uniqueEvents;
      }
    }
  }

  pushChanges(): void {
    this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
    this.totalSettingsObject = {
      calendarName: this.calendarName,
      calendarSettings: {
        ...this.totalSettingsObject.calendarSettings,
        DoW_names: this.DoW_names.slice(),
        settingsMonths: this.settingsMonths.slice(),
        currentYear: this.currentYear,
        leapYears: this.leapYears,
        eras: this.eras
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
    // this should be using input binding instead of getElementByID
    // for potential month values
    const newMonthInput = document.getElementById('new-month-field') as HTMLInputElement;
    if (newMonthInput.value) {
      this.settingsMonths.push({name: newMonthInput.value, length: 1});
      this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
      newMonthInput.value = '';
    }
  }

  deleteMonth(index: number): void {
    if (index >= 0) {
      this.settingsMonths.splice(index, 1);
      this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
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

  createNewEra() {
    this.eras.splice((this.newEraIndex - 1), 0, this.newEra);
    this.resetEmptyEra();
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

  deleteEra(index: number): void {
    if (index >= 0) {
      this.eras.splice(index, 1);
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

  resetEmptyEra(): void {
    this.newEra.eraName = null;
    this.newEra.abbreviation = null;
    this.newEra.beginning = null;
    this.newEra.ending = null;
    this.newEra.reversed = null;
    this.newEraIndex = null;
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
}
