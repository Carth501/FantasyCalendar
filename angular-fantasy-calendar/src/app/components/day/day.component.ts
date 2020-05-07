import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { setNewEventPanel } from 'src/app/store/actions/view.actions';
import { Day } from '../../day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  constructor(
    private store: Store<any>) {}

  @Input() day: Day;
  @Output() dayClick = new EventEmitter<number>();

  click(dayID: number): void {
    this.store.dispatch(setNewEventPanel({open: true, dayID}));
  }
}
