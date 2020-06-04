import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setNewEventPanel } from 'src/app/store/actions/view.actions';
import { Day } from '../../day';
import { Observable, merge } from 'rxjs';
import { DayService } from 'src/app/day.service';
import { CalendarEvent } from 'src/app/calendarEvent';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: Day;
  @Output() dayClick = new EventEmitter<number>();

  bubbles$: Observable<string[]>;


  constructor(
    private store: Store<any>,
    private dayService: DayService) {
  }

  ngOnInit() {
    this.bubbles$ = this.getEventBubbles$();
  }

  click(dayID: number): void {
    this.store.dispatch(setNewEventPanel({open: true, dayID}));
  }

  getEventBubbles$(): Observable<string[]> {
    const events = this.dayService.getAllEvents(this.day);
    return this.dayService.getBubbles$(events);
  }

  // checkFilter(): boolean {
  //   this.eventTags.forEach(tag =>
  //     {
  //       if (this.filter.includes(tag)) {
  //       return true;
  //     })}
  //     return false;
  // }
}
