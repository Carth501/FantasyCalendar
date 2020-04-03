import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calendarEvents = [
      {eventID: 0, title: '', dateID: 6, duration: 1, repeatDays: 0, repeatAnnual: false},
      {eventID: 1, title: 'Test', dateID: 6, duration: 1, repeatDays: 16, repeatAnnual: false},
      {eventID: 2, title: 'Full Moon', dateID: 2, duration: 3, repeatDays: 34.5, repeatAnnual: false},
      {eventID: 3, title: 'Total Luna', dateID: 42, duration: 4.2, repeatDays: 44.4, repeatAnnual: false}
    ];
    const calendarSettings = {dayID: 4000000, daysPerYear: 311, daysPerMonth: 31, startingDoW: 1,
      DoW_names: ['Firsday', 'Tuesday', 'Thirday', 'Forday', 'Fifthday', 'Sixthday', 'Sunday', 'Afterday', 'Lastday'],
      monthNames:
      ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']};
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
