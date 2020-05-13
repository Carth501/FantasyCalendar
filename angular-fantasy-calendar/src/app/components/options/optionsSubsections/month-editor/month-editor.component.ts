import { Component, OnInit, Input } from '@angular/core';
import { SettingsMonth } from 'src/app/settingsMonth';

@Component({
  selector: 'app-month-editor',
  templateUrl: './month-editor.component.html',
  styleUrls: ['./month-editor.component.css']
})
export class MonthEditorComponent implements OnInit {

  @Input() settingsMonths: SettingsMonth[];
  // daysPerYear: number; // not implemented

  constructor() { }

  ngOnInit(): void {
  }

  addMonth(): void {
    // this should be using input binding instead of getElementByID
    // for potential month values
    const newMonthInput = document.getElementById('new-month-field') as HTMLInputElement;
    if (newMonthInput.value) {
      this.settingsMonths.push({name: newMonthInput.value, length: 1});
      // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
      // not implemented
      newMonthInput.value = '';
    }
  }

  deleteMonth(index: number): void {
    if (index >= 0) {
      this.settingsMonths.splice(index, 1);
      // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
      // not implemented
    }
  }

  trackArray(index, item) {
    return index;
  }
}
