import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CyclicalEvent, YearlyEvent, WeeklyEvent, MonthlyEvent, MonthlyDayOfWeekEvent,
  YearlyMonthlyDayOfWeekEvent, UniqueEvent, YearlyMonthlyEvent } from './calendarEvent';
import { TotalSettings } from './totalSettings';
import { YearMonthDowFieldsComponent } from './event field components/year-month-dow-fields/year-month-dow-fields.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const uniqueEvents: UniqueEvent[] = [
      {title: 'This project\'s inception', offset: 4000050, duration: 1}
    ];
    const cyclicalEvents: CyclicalEvent[] = [
      {title: 'Very rare!', offset: 6, duration: 1, repeatDays: 1620},
      {title: 'Full Moon', offset: 22, duration: 4, repeatDays: 29.530}
    ];
    const weeklyEvents: WeeklyEvent[] = [];
    const monthlyEvents: MonthlyEvent[] = [];
    const yearlyEvents: YearlyEvent[] = [
      { title: 'Height of Winter', duration: 1, offset: 5 }
    ];
    const monthDOWEvents: MonthlyDayOfWeekEvent[] = [];
    const yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[] = [
      { title: 'Thanksgiving', duration: 1, offset: 5, weekOffset: 4, monthOffset: 11}
    ];
    const yearlyMonthlyEvents: YearlyMonthlyEvent[] = [
      { title: 'New Year\'s Day', duration: 1, offset: 1, monthOffset: 1 }
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
      uniqueEvents,
      cyclicalEvents,
      weeklyEvents,
      monthlyEvents,
      yearlyEvents,
      monthDOWEvents,
      yearMonthDOWEvents,
      yearlyMonthlyEvents
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
