import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY_ERA, Era } from 'src/app/era';
import { OptionsActions } from 'src/app/store/actions';
import { YearMath } from 'src/app/yearMath';

@Component({
  selector: 'app-year-editor',
  templateUrl: './year-editor.component.html',
  styleUrls: ['./year-editor.component.css']
})
export class YearEditorComponent implements OnInit {


  @Input() year: YearMath;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  createNewEra({eraOrder, newEra}) {
    this.year.eras.splice((eraOrder - 1), 0, newEra);
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
    this.store.dispatch(OptionsActions.setYearMath({yearMath: this.year}));
  }
}
