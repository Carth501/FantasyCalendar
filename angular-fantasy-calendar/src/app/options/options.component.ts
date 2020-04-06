import { Component, OnInit, Input } from '@angular/core';
import { YearService } from '../year.service';
import { OptionsSettings } from '../optionsSettings';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  @Input() set optionsSettings(value) { this.optionsArrived(value); }
  daysPerWeek;
  @Input() DoW: string[];
  @Input() MonthNames: string[];
  @Input() daysPerMonths: number[];
  daysPerYear: number;
  showSettings = false;

  constructor(
    private yearService: YearService
    ) { }


  toggleSettingsSidebar(): void {
    this.showSettings = !this.showSettings;
  }

  pushChanges(): void {

  }

  optionsArrived(optionsSettings: OptionsSettings): void {
    if (optionsSettings) {
      this.DoW = optionsSettings.DoW_names;
      this.daysPerWeek = this.DoW.length;
      this.MonthNames = optionsSettings.monthNames;
      this.daysPerMonths = optionsSettings.daysPerMonths;
      this.daysPerYear = this.yearService.sumOfMonths(this.daysPerMonths);
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

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW.splice(index, 1);
      this.daysPerWeek = this.DoW.length;
    }
  }

  trackArray(index, item) {
    return index;
  }
}
