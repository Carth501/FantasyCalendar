import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Lookup } from 'src/app/lookup';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.css']
})
export class CalendarSelectorComponent implements OnInit {

  @Input() lookupArray: Lookup[];
  @Output() switchTo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  changeCalendar(change: MatSelectChange): void {
    // do this with actions
    this.switchTo.emit(change.value);
    // this.initializeCalendar(change.value);
  }
}
