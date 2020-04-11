import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowAltCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { EMPTY_LEAP_YEAR, LeapYear } from '../leapYear';
import { OptionsSettings } from '../optionsSettings';
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
  @Input() set optionsSettings(value) { this.optionsArrived(value); }
  daysPerWeek;
  @Input() DoWNames: string[];
  @Input() MonthNames: string[];
  @Input() daysPerMonths: number[];
  daysPerYear: number;
  showSettings = false;
  @Output() changes = new EventEmitter<OptionsSettings>();
  @Input() currentYear: number;
  @Input() newDoWName: string;
  @Input() leapYears: LeapYear[];
  @Input() candidateLY = EMPTY_LEAP_YEAR;
  @Input() set totalSettings(object) {
    this.settingsArrived(object);
    console.log('Settings arrived!');
  }

  @Input() jsonSave: string;

  @Input() fromjson: string;
  @Output() readNewjson = new EventEmitter<string>();

  constructor(
    private yearService: YearService,
    private clipboard: Clipboard
    ) { }


  toggleSettingsSidebar(): void {
    this.showSettings = !this.showSettings;
  }

  pushChanges(): void {
    this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
    const optionsSettings = {
      DoWNames: this.DoWNames.slice(),
      monthNames: this.MonthNames.slice(),
      daysPerMonths: this.daysPerMonths.slice(),
      currentYear: this.currentYear,
      leapYears: this.leapYears
    };
    this.changes.emit(optionsSettings);
  }

  optionsArrived(optionsSettings: OptionsSettings): void {
    if (optionsSettings) {
      this.DoWNames = optionsSettings.DoWNames;
      this.daysPerWeek = this.DoWNames.length;
      this.MonthNames = optionsSettings.monthNames;
      this.daysPerMonths = optionsSettings.daysPerMonths;
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
      this.currentYear = optionsSettings.currentYear;
      this.leapYears = optionsSettings.leapYears;
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
    this.DoWNames.push(this.newDoWName);
    this.newDoWName = '';
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoWNames.splice(index, 1);
      this.daysPerWeek = this.DoWNames.length;
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
