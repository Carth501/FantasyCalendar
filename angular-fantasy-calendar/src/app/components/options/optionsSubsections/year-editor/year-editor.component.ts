import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { OptionsActions } from 'src/app/store/actions';
import { YearMath } from 'src/app/yearMath';
import { Subscription, Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { selectNewEraPanelOpen, selectEraEditingIndex } from 'src/app/store/selectors/options.selector';

@Component({
  selector: 'app-year-editor',
  templateUrl: './year-editor.component.html',
  styleUrls: ['./year-editor.component.css']
})
export class YearEditorComponent implements OnInit {

  @Input() set setYear(yearMath: YearMath) {
    this.year = _.cloneDeep(yearMath);
  }
  year: YearMath;
  defaultYearChangeSubscription: Subscription;
  defaultYearChange = new Subject<number>();
  defaultEraChangeSubscription: Subscription;
  defaultEraChange = new Subject<number>();

  newEraPanelOpen$: Observable<boolean>;
  eraEditingIndex$: Observable<number>;

  constructor(
    private store: Store<any>
  ) {
    // Debounce search.
    this.defaultYearChangeSubscription = this.defaultYearChange.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.changeDefaultYear(value);
      });

    // Debounce search.
    this.defaultEraChangeSubscription = this.defaultEraChange.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.changeDefaultEra(value);
      });

    this.newEraPanelOpen$ = this.store.select(selectNewEraPanelOpen);
    this.eraEditingIndex$ = this.store.select(selectEraEditingIndex);
    }

  ngOnInit(): void {
  }

  changeDefaultYear(value: number): void {
    this.year.currentYear = value;
    this.applyChange();
  }

  changeDefaultEra(value: number): void {
    this.year.currentEra = value;
    this.applyChange();
  }

  createNewEra(data) {
    const newEraCopy = _.cloneDeep(data.newEra);
    this.year.eras.splice((data.newEraOrder - 1), 0, newEraCopy);
    this.applyChange();
  }

  deleteEra(index: number): void {
    this.year.eras.splice(index, 1);
    this.applyChange();
  }

  trackArray(index, item) {
    return index;
  }

  applyChange() {
    this.store.dispatch(OptionsActions.setYearMath({yearMath: _.cloneDeep(this.year)}));
  }

  toggleNewEraPanel(): void {
    this.store.dispatch(OptionsActions.toggleNewEra({}));
  }

  changeEraEditingIndex(newNumber: number): void {
    this.store.dispatch(OptionsActions.eraEditingIndex({eraEditingIndex: newNumber}));
  }
}
