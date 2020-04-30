import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CyclicalEvent, MonthlyDayOfWeekEvent, MonthlyEvent, UniqueEvent, WeeklyEvent,
  YearlyEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent } from './calendarEvent';
import { TotalSettings } from './totalSettings';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const defaultCalendarName = 'Gregorian Calendar';
    const defaultUniqueEvents: UniqueEvent[] = [
      {title: 'This project\'s inception', offset: 4000082, duration: 1},
      {title: 'Marty McFly Travels back to 1955', offset: 3987515, duration: 1}
    ];
    const defaultCyclicalEvents: CyclicalEvent[] = [
      {title: 'Full Moon', offset: 22, duration: 4, repeatDays: 29.530}
    ];
    const defaultWeeklyEvents: WeeklyEvent[] = [];
    const defaultMonthlyEvents: MonthlyEvent[] = [];
    const defaultYearlyEvents: YearlyEvent[] = [
    ];
    const defaultMonthDOWEvents: MonthlyDayOfWeekEvent[] = [];
    const defaultYearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[] = [
      { title: 'MLK Day', duration: 1, offset: 2, weekOffset: 3, monthOffset: 1},
      { title: 'Presidents\' Day', duration: 1, offset: 2, weekOffset: 3, monthOffset: 2},
      { title: 'Labor Day', duration: 1, offset: 2, weekOffset: 1, monthOffset: 9},
      { title: 'Ocktoberfest', duration: 1, offset: 2, weekOffset: 2, monthOffset: 9},
      { title: 'Thanksgiving', duration: 1, offset: 5, weekOffset: 4, monthOffset: 11}
    ];

    const defaultYearlyMonthlyEvents: YearlyMonthlyEvent[] = [
      { title: 'New Year\'s Day', duration: 1, offset: 1, monthOffset: 1 },
      { title: 'Groundhog Day', duration: 1, offset: 2, monthOffset: 2 },
      { title: 'Darwin Day', duration: 1, offset: 12, monthOffset: 2 },
      { title: 'Family Day', duration: 1, offset: 18, monthOffset: 2 },
      { title: 'Saint Valentine\'s Day', duration: 1, offset: 14, monthOffset: 2 },
      { title: 'International Women\'s Day', duration: 1, offset: 8, monthOffset: 3 },
      { title: 'Saint Patrick\'s Day', duration: 1, offset: 17, monthOffset: 3 },
      { title: 'Star Wars Day', duration: 1, offset: 4, monthOffset: 5 },
      { title: 'Earth Day', duration: 1, offset: 22, monthOffset: 4 },
      { title: 'King\'s Day', duration: 1, offset: 27, monthOffset: 4 },
      { title: 'Floralia', duration: 1, offset: 28, monthOffset: 4 },
      { title: 'Cinco de Mayo', duration: 1, offset: 5, monthOffset: 5 },
      { title: 'Take Your Dog to Work Day', duration: 1, offset: 24, monthOffset: 6 },
      { title: 'Canada Day', duration: 1, offset: 1, monthOffset: 7 },
      { title: 'Independence Day', duration: 1, offset: 4, monthOffset: 7 },
      { title: 'Le 14 Juillet', duration: 1, offset: 14, monthOffset: 7 },
      { title: 'International Talk Like a Pirate Day', duration: 1, offset: 19, monthOffset: 9 },
      { title: 'Halloween', duration: 1, offset: 31, monthOffset: 10 },
      { title: 'International Men\'s Day', duration: 1, offset: 19, monthOffset: 11 },
      { title: 'Christmas Eve', duration: 1, offset: 24, monthOffset: 12 },
      { title: 'Christmas Day', duration: 1, offset: 25, monthOffset: 12 },
      { title: 'New Year\'s Eve', duration: 1, offset: 31, monthOffset: 12 }
    ];

    const defaultCalendarSettings = {
      startingDayID: 4000000,
      startingDoW: 3,
      DoW_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      settingsMonths: [{name: 'Janaury', length: 31},
                      {name: 'Feburary', length: 31},
                      {name: 'March', length: 31},
                      {name: 'April', length: 31},
                      {name: 'May', length: 31},
                      {name: 'June', length: 31},
                      {name: 'July', length: 31},
                      {name: 'August', length: 31},
                      {name: 'September', length: 31},
                      {name: 'October', length: 31},
                      {name: 'November', length: 31},
                      {name: 'December', length: 31}
      ],
      eras: [
        {eraName: 'Before Common Era', abbreviation: 'BCE', ending: 1, reversed: true},
        {eraName: 'Common Era', abbreviation: 'CE', beginning: 1, reversed: false}
      ],
      currentEra: 1,
      currentYear: 2020,
      leapYears: [
        {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
        {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
        {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      ]
    };
    const defaultSettings: TotalSettings = {
      calendarName: defaultCalendarName,
      calendarSettings: defaultCalendarSettings,
      uniqueEvents: defaultUniqueEvents,
      cyclicalEvents: defaultCyclicalEvents,
      weeklyEvents: defaultWeeklyEvents,
      monthlyEvents: defaultMonthlyEvents,
      yearlyEvents: defaultYearlyEvents,
      monthDOWEvents: defaultMonthDOWEvents,
      yearMonthDOWEvents: defaultYearMonthDOWEvents,
      yearlyMonthlyEvents: defaultYearlyMonthlyEvents
    };




    const sylrinCalendarName = 'Shalan Calendar';
    const sylrinUniqueEvents: UniqueEvent[] = [
      {title: 'Death Breaks', offset: 4000082, duration: 1}
    ];
    const sylrinCyclicalEvents: CyclicalEvent[] = [
      {title: 'Full Itric', offset: 3, duration: 2, repeatDays: 20.415153},
      {title: 'Full Yristo', offset: 7, duration: 5, repeatDays: 50.741297}
    ];
    const sylrinWeeklyEvents: WeeklyEvent[] = [];
    const sylrinMonthlyEvents: MonthlyEvent[] = [];
    const sylrinYearlyEvents: YearlyEvent[] = [
    ];
    const sylrinMonthDOWEvents: MonthlyDayOfWeekEvent[] = [];
    const sylrinYearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[] = [
      { title: '', duration: 1, offset: 2, weekOffset: 3, monthOffset: 1}
    ];

    const sylrinYearlyMonthlyEvents: YearlyMonthlyEvent[] = [
      { title: 'Omre\'s Ascension', duration: 1, offset: 23, monthOffset: 4 },
      { title: 'Djarsday', duration: 1, offset: 31, monthOffset: 9 }
    ];

    const sylrinCalendarSettings = {
      startingDayID: 4000000,
      startingDoW: 3,
      DoW_names: ['Omresday', 'Torosday', 'Wasday', 'Darioday', 'Figasday', 'Soliday', 'Earday'],
      settingsMonths: [{name: 'First', length: 31},
                      {name: 'Second', length: 31},
                      {name: 'Third', length: 31},
                      {name: 'Fourth', length: 31},
                      {name: 'Fifth', length: 31},
                      {name: 'Sixth', length: 31},
                      {name: 'Seventh', length: 31},
                      {name: 'Eighth', length: 31},
                      {name: 'Nineth', length: 31},
                      {name: 'Tenth', length: 31}
      ],
      eras: [
        {eraName: 'Before Common Era', abbreviation: 'BCE', ending: 1, reversed: true},
        {eraName: 'Common Era', abbreviation: 'CE', beginning: 1, reversed: false}
      ],
      currentEra: 1,
      currentYear: 2020,
      leapYears: [
        {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
        {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
        {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      ]
    };
    const sylrinSettings: TotalSettings = {
      calendarName: sylrinCalendarName,
      calendarSettings: sylrinCalendarSettings,
      uniqueEvents: sylrinUniqueEvents,
      cyclicalEvents: sylrinCyclicalEvents,
      weeklyEvents: sylrinWeeklyEvents,
      monthlyEvents: sylrinMonthlyEvents,
      yearlyEvents: sylrinYearlyEvents,
      monthDOWEvents: sylrinMonthDOWEvents,
      yearMonthDOWEvents: sylrinYearMonthDOWEvents,
      yearlyMonthlyEvents: sylrinYearlyMonthlyEvents
    };
    const calendars = [
      defaultSettings, sylrinSettings];
    return {calendars};
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
