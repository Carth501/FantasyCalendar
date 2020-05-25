import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { setDoW, dayOfWeekEditingIndex } from 'src/app/store/actions/options.actions';
import { Observable } from 'rxjs';
import { selectDayOfWeekEditingIndex } from 'src/app/store/selectors/options.selector';

@Component({
  selector: 'app-week-editor',
  templateUrl: './week-editor.component.html',
  styleUrls: ['./week-editor.component.css']
})
export class WeekEditorComponent implements OnInit {


  @Input() set setDoW(DoW: string[]) {
    this.DoW = _.cloneDeep(DoW);
  }

  DoW: string[];
  @Input() newDoWName: string;
  daysPerWeek;
  dayOfWeekEditingIndex$: Observable<number>;

  constructor(
    private store: Store
  ) {
    this.dayOfWeekEditingIndex$ = this.store.select(selectDayOfWeekEditingIndex);
  }

  ngOnInit(): void {
  }

  addDoW(): void {
    this.DoW.push(this.newDoWName);
    this.pushDoW();
    this.newDoWName = '';
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW.splice(index, 1);
      this.daysPerWeek = this.DoW.length;
      this.pushDoW();
    }
  }

  toggleEditWeek(index: number): void {
    this.store.dispatch(dayOfWeekEditingIndex({dayOfWeekEditingIndex: index}));
    if(index === -1){
      this.pushDoW();
    }
  }

  trackArray(index, item) {
    return index;
  }

  pushDoW(): void {
    this.store.dispatch(setDoW({DoW: _.cloneDeep(this.DoW)}));
  }
}
