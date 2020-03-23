import { Injectable } from '@angular/core';
import { Day } from './day';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor() { }

  getDays(): Day[] {
    return this.createDays(1, 10);
  }

  createDays(start: number, length: number): Day[] {
    const days: Day[] = [];
    for (let i = start; i < start + length; i++) {
      days.push({id: i});
      console.log(i);
    }
    return days;
  }
}
