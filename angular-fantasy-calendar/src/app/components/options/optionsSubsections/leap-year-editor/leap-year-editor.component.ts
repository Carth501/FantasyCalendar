import { Component, OnInit, Input } from '@angular/core';
import { LeapYear, EMPTY_LEAP_YEAR } from 'src/app/leapYear';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { setLeapYears, leapYearEditingIndex, toggleNewLeapYear } from 'src/app/store/actions/options.actions';
import { Observable } from 'rxjs';
import { selectLeapYearEditingIndex, selectNewLeapYearPanelOpen } from 'src/app/store/selectors/options.selector';

@Component({
  selector: 'app-leap-year-editor',
  templateUrl: './leap-year-editor.component.html',
  styleUrls: ['./leap-year-editor.component.css']
})
export class LeapYearEditorComponent implements OnInit {


  @Input() set setLeapYear(leapYears: LeapYear[]) {
    this.leapYears = _.cloneDeep(leapYears);
  }

  leapYears: LeapYear[];
  leapYearEditingIndex$: Observable<number>;
  newLeapYearPanel$: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    this.leapYearEditingIndex$ = this.store.select(selectLeapYearEditingIndex);
    this.newLeapYearPanel$ = this.store.select(selectNewLeapYearPanelOpen);
  }

  ngOnInit(): void {
  }

  deleteLY(index: number): void {
    if (index >= 0) {
      this.leapYears.splice(index, 1);
    }
  }

  createNewLeapYear(newLeapYear: LeapYear) {
    this.leapYears.push(newLeapYear);
    this.pushLeapYears();
  }

  toggleEditLeapYear(index: number): void {
    this.store.dispatch(leapYearEditingIndex({leapYearEditingIndex: index}));
  }

  pushLeapYears(): void {
    this.store.dispatch(setLeapYears({leapYears: _.cloneDeep(this.leapYears)}));
  }

  toggleNewLeapYear(): void {
    this.store.dispatch(toggleNewLeapYear({}));
  }

  trackArray(index, item) {
    return index;
  }
}
