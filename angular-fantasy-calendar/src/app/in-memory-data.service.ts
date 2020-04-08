import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calendarEvents = [
      {eventID: 0, title: '', dateID: 6, duration: 1, repeatDays: 0, repeatAnnual: false},
      {eventID: 1, title: 'Very rare!', dateID: 6, duration: 1, repeatDays: 1620, repeatAnnual: false},
      {eventID: 2, title: 'Full Moon', dateID: 22, duration: 4, repeatDays: 29.530, repeatAnnual: false}
    ];
    const calendarSettings = {
      startingDayID: 4000000,
      daysPerMonths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      startingDoW: 3,
      DoW_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames:
      ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      currentYear: 2020,
      leapYearCycles: [4, 100, 400],
      leapYearChange: [1, -1, 1],
      leapYearOffset: [0, 0, 0],
      leapDayMonth: [1, 1, 1]
    };
    return {calendarEvents, calendarSettings};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: CalendarEvent[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
