import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY_ERA, Era } from 'src/app/era';

@Component({
  selector: 'app-new-era',
  templateUrl: './new-era.component.html',
  styleUrls: ['./new-era.component.css']
})
export class NewEraComponent {

  @Input() eraListLength;
  @Input() newEra = EMPTY_ERA;
  @Input() newEraOrder: number;
  @Output() eraCreation = new EventEmitter<{number, Era}>();

  constructor() { }

  submit(): void {
    if (
      this.newEra.eraName !== null &&
      this.newEra.abbreviation !== null &&
      this.newEra.beginning !== null &&
      this.newEra.ending !== null) {
        this.eraCreation.emit({ number: this.newEraOrder, Era: this.newEra });
        this.resetEmptyEra();
      }
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
