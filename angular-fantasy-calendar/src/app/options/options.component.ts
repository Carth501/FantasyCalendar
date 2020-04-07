import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YearService } from '../year.service';
import { OptionsSettings } from '../optionsSettings';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  faArrowCircleUp = faArrowCircleUp;
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

  constructor(
    private yearService: YearService
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
      currentYear: this.currentYear
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

  trackArray(index, item) {
    return index;
  }
}
