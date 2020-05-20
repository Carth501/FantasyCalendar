import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable, Subscription, Subject } from 'rxjs';
import { SettingsMonth } from 'src/app/settingsMonth';
import { monthEditingIndex, setMonths } from 'src/app/store/actions/options.actions';
import { selectMonthEditingIndex } from 'src/app/store/selectors/options.selector';

@Component({
  selector: 'app-month-editor',
  templateUrl: './month-editor.component.html',
  styleUrls: ['./month-editor.component.css']
})
export class MonthEditorComponent implements OnInit {

  @Input() set setMonths(months: SettingsMonth[]) {
    this.settingsMonths = _.cloneDeep(months);
  }

  settingsMonths: SettingsMonth[];
  @Input() newMonth: string;
  // daysPerYear: number; // not implemented

  monthEditingIndex$: Observable<number>;

  constructor(
    private store: Store
  ) {
    this.monthEditingIndex$ = this.store.select(selectMonthEditingIndex);
  }

  ngOnInit(): void {
  }

  addMonth(): void {
    if (this.newMonth) {
      this.settingsMonths.push({name: this.newMonth, length: 1});
      // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
      // not implemented
      this.newMonth = '';
      this.pushChanges();
    }
  }

  deleteMonth(index: number): void {
    if (index >= 0) {
      this.settingsMonths.splice(index, 1);
      // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
      // not implemented
      this.toggleEditMonth(-1);
    }
  }

  toggleEditMonth(index: number): void {
    this.store.dispatch(monthEditingIndex({monthEditingIndex: index}));
    if (index === -1) {
      this.pushChanges();
    }
  }

  pushChanges(): void {
    this.store.dispatch(setMonths({settingsMonths: _.cloneDeep(this.settingsMonths)}));
  }

  trackArray(index, item) {
    return index;
  }
}
