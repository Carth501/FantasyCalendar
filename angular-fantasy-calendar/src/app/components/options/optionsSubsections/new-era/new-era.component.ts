import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY_ERA, Era } from 'src/app/era';
import { Store } from '@ngrx/store';
import { OptionsActions } from 'src/app/store/actions';

@Component({
  selector: 'app-new-era',
  templateUrl: './new-era.component.html',
  styleUrls: ['./new-era.component.css']
})
export class NewEraComponent {

  @Input() eraListLength;
  @Input() newEra = EMPTY_ERA;
  @Input() newEraOrder: number;
  @Output() eraCreation = new EventEmitter<{newEra: Era, newEraOrder: number}>();

  constructor(
    private store: Store<any>
  ) { }

  submit(): void {
    if (
      this.newEra.eraName !== null &&
      this.newEra.abbreviation !== null &&
      this.newEra.beginning !== null &&
      this.newEra.ending !== null) {
        this.eraCreation.emit({ newEra: this.newEra, newEraOrder: this.newEraOrder });
        this.resetEmptyEra();
      }
    this.store.dispatch(OptionsActions.toggleNewEra({}));
  }

  resetEmptyEra(): void {
    this.newEra.eraName = null;
    this.newEra.abbreviation = null;
    this.newEra.beginning = null;
    this.newEra.ending = null;
    this.newEra.reversed = null;
    this.newEraOrder = null;
  }
}
