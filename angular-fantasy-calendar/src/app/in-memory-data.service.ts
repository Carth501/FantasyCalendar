import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CyclicalEvent, YearlyEvent, WeeklyEvent, MonthlyEvent } from './calendarEvent';
import { TotalSettings } from './totalSettings';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cyclicalEvents: CyclicalEvent[] = [
      {title: 'Very rare!', offset: 6, duration: 1, repeatDays: 1620},
      {title: 'Full Moon', offset: 22, duration: 4, repeatDays: 29.530}
    ];
    const weeklyEvents: WeeklyEvent[] = [];
    const monthlyEvents: MonthlyEvent[] = [];
    const yearlyEvents: YearlyEvent[] = [
      {title: 'Height of Winter', duration: 1, offset: 5, month: 1, roundToNearest: false}
    ];
    const calendarSettings = {
      startingDayID: 4000000,
      daysPerMonths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      startingDoW: 3,
      DoW_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames:
      ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      currentYear: 2020,
      leapYears: [
        {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
        {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
        {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      ]
    };
    const defaultSettings: TotalSettings = {
      calendarSettings,
      cyclicalEvents,
      weeklyEvents,
      monthlyEvents,
      yearlyEvents
    };
    return {defaultSettings};
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
