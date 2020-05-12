import { Component, OnInit, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Era, EMPTY_ERA } from 'src/app/era';

@Component({
  selector: 'app-year-editor',
  templateUrl: './year-editor.component.html',
  styleUrls: ['./year-editor.component.css']
})
export class YearEditorComponent implements OnInit {


  @Input() year: {
        startingDayID: number;
        startingDoW: number;
        eras: Era[];
        currentEra: number;
        currentYear: number;
    };
  @Input() newEra = EMPTY_ERA;
  @Input() newEraIndex: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  createNewEra() {
    this.year.eras.splice((this.newEraIndex - 1), 0, this.newEra);
    this.resetEmptyEra();
  }

  resetEmptyEra(): void {
    this.newEra.eraName = null;
    this.newEra.abbreviation = null;
    this.newEra.beginning = null;
    this.newEra.ending = null;
    this.newEra.reversed = null;
    this.newEraIndex = null;
  }

  deleteEra(index: number): void {
    if (index >= 0) {
      this.year.eras.splice(index, 1);
    }
  }

  trackArray(index, item) {
    return index;
  }
}
