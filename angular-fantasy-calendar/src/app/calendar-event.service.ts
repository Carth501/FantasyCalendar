import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  private dayClicks = new Subject<number>();

  public readonly dayclick$: Observable<number> = this.dayClicks.asObservable();

  dayClick(dayID: number): void {
    this.dayClicks.next(dayID);
  }
  
}
