import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Lookup } from 'src/app/lookup';
import { Store } from '@ngrx/store';
import { changeCalendar } from 'src/app/store/actions/view.actions';
import { selectCalendarIndex } from 'src/app/store/selectors/view.selector';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.css']
})
export class CalendarSelectorComponent implements OnInit {

  @Input() lookupArray: Lookup[];
  @Output() switchTo = new EventEmitter<number>();
  @Input() activeCalendar$ = this.store.select(selectCalendarIndex);

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }


  changeCalendar(change: MatSelectChange): void {
    this.switchTo.emit(change.value);
  }
}
