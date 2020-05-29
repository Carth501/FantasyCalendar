import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CyclicalEvent, MonthlyDayOfWeekEvent, MonthlyEvent, UniqueEvent, WeeklyEvent,
  YearlyEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent, EventLists } from './calendarEvent';
import { Calendar } from './Calendar';

  /*
@Injectable({
  providedIn: 'root',
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const defaultCalendarID = 0;
    const defaultCalendarName = 'Gregorian Calendar';
    const defaultUniqueEvents: UniqueEvent[] = [
      {title: 'This project\'s inception', offset: 4000082, duration: 1},
      {title: 'Marty McFly Travels back to 1955', offset: 3987515, duration: 1}
    ];
    const defaultCyclicalEvents: CyclicalEvent[] = [
      {title: 'Full Moon', offset: 22, duration: 3, repeatDays: 29.530}
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

    const defaultEventList: EventLists = {
      uniqueEvents: defaultUniqueEvents,
      cyclicalEvents: defaultCyclicalEvents,
      weeklyEvents: defaultWeeklyEvents,
      monthlyEvents: defaultMonthlyEvents,
      yearlyEvents: defaultYearlyEvents,
      monthDOWEvents: defaultMonthDOWEvents,
      yearMonthDOWEvents: defaultYearMonthDOWEvents,
      yearlyMonthlyEvents: defaultYearlyMonthlyEvents
    };

    const defaultStartingDayID = 4000000;
    const defaultStartingDoW = 3;
    const defaultDoW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const defaultMonths = [
      {name: 'January', length: 31},
      {name: 'February', length: 28},
      {name: 'March', length: 31},
      {name: 'April', length: 30},
      {name: 'May', length: 31},
      {name: 'June', length: 30},
      {name: 'July', length: 31},
      {name: 'August', length: 31},
      {name: 'September', length: 30},
      {name: 'October', length: 31},
      {name: 'November', length: 30},
      {name: 'December', length: 31}
    ];
    const defaultEras = [
      {eraName: 'Before Common Era', abbreviation: 'BCE', ending: 1, reversed: true},
      {eraName: 'Common Era', abbreviation: 'CE', beginning: 1, reversed: false}
    ];
    const defaultCurrentEra = 1;
    const defaultCurrentYear = 2020;
    const defaultLeapYearRules = [
      {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
      {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
    ];

    const defaultSettings: Calendar = {
      calendarID: defaultCalendarID,
      calendarName: defaultCalendarName,
      year: {
        startingDayID: defaultStartingDayID,
        startingDoW: defaultStartingDoW,
        eras: defaultEras,
        currentEra: defaultCurrentEra,
        currentYear: defaultCurrentYear
      },
      months: defaultMonths,
      DoW: defaultDoW,
      leapYearRules: defaultLeapYearRules,
      events: defaultEventList
    };




    const sylrinCalendarID = 1;
    const sylrinCalendarName = 'Shalan Calendar';
    const sylrinUniqueEvents: UniqueEvent[] = [
      {title: 'Narder Invaded', offset: 3928209, duration: 1}, // 590 ME
      {title: 'Nardish Revolution begins', offset: 3934321, duration: 1}, // 600 ME
      {title: 'Nardish Revolution ends', offset: 3936892, duration: 1}, // 605 ME
      {title: 'Second Invasion of Narder', offset: 3945868, duration: 1},
      // summerseve, 620
      {title: 'Dawn Civil War Begins', offset: 3998922, duration: 1},
      {title: 'Ver\'s death', offset: 3999299, duration: 1},
      {title: 'De Lumine meets Kaiso', offset: 4000261, duration: 1},
      {title: 'Oubat meets the party', offset: 4000276, duration: 1},
      {title: 'Oubat joins the party', offset: 4000278, duration: 1},
      {title: 'Esall and Kullak are rescued', offset: 4000281, duration: 1},
      {title: 'Death Breaks', offset: 4000282, duration: 1},
      {title: 'Kullak reveals his motives', offset: 4000284, duration: 1},
      {title: 'Agna talks with Kullak', offset: 4000285, duration: 1},
      {title: 'Party seperately reaches Taful', offset: 4000287, duration: 1},
      {title: 'The Fighting Pits', offset: 4000288, duration: 1},
      {title: 'Party is ambushed by the Society of Purity', offset: 4000290, duration: 1},
      {title: 'Party returns to life', offset: 4000291, duration: 1},
      {title: 'Party is sent out to find a Wyvernstone', offset: 4000295, duration: 1},
      {title: 'Party is attacked by ogres east of Jiddayd', offset: 4000305, duration: 1},
      {title: 'Party \'meets\' the Catfolk tribe', offset: 4000306, duration: 1},
      {title: 'Party fights two pixies', offset: 4000308, duration: 1},
      {title: 'Party escapes the Sacrat Pits', offset: 4000310, duration: 1},
      {title: 'Party escapes the Thousand Spires', offset: 4000312, duration: 1}
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
      { title: 'Athok\'s Games', duration: 8, offset: 1, weekOffset: 3, monthOffset: 15}
    ];

    const sylrinYearlyMonthlyEvents: YearlyMonthlyEvent[] = [
      { title: 'Omre\'s Ascension', duration: 1, offset: 27, monthOffset: 4 },
      { title: 'Djarsday', duration: 1, offset: 31, monthOffset: 9 },
      { title: 'Nardish Liberation Day', duration: 1, offset: 22, monthOffset: 1 },
      { title: 'Gadren\'s Day', duration: 1, offset: 3, monthOffset: 3 },
      { title: 'Athok\'s Games', duration: 8, offset: 3, monthOffset: 3 },
      { title: 'North Summerseve', duration: 1, offset: 28, monthOffset: 4 },
      { title: 'South Winterseve', duration: 1, offset: 28, monthOffset: 4 },
      { title: 'North Summersend', duration: 1, offset: 19, monthOffset: 8 },
      { title: 'South Wintersend', duration: 1, offset: 19, monthOffset: 8 },
      { title: 'North Autumnfest', duration: 1, offset: 20, monthOffset: 8 },
      { title: 'South Spring Bloom', duration: 1, offset: 20, monthOffset: 8 },
      { title: 'North Winterseve', duration: 1, offset: 10, monthOffset: 12 },
      { title: 'South Summerseve', duration: 1, offset: 10, monthOffset: 12 },
      { title: 'North Springseve', duration: 1, offset: 40, monthOffset: 15 },
      { title: 'South Autumnseve', duration: 1, offset: 40, monthOffset: 15 }
    ];

    const sylrinEventLists: EventLists = {
      uniqueEvents: sylrinUniqueEvents,
      cyclicalEvents: sylrinCyclicalEvents,
      weeklyEvents: sylrinWeeklyEvents,
      monthlyEvents: sylrinMonthlyEvents,
      yearlyEvents: sylrinYearlyEvents,
      monthDOWEvents: sylrinMonthDOWEvents,
      yearMonthDOWEvents: sylrinYearMonthDOWEvents,
      yearlyMonthlyEvents: sylrinYearlyMonthlyEvents
    };

    const sylrinStartingDayID = 4000000;
    const sylrinStartingDoW = 4;
    const sylrinDoW = ['Vesday', 'Orsday', 'Wasday', 'Arday', 'Figday', 'Tolday', 'Erday', 'Kesday'];
    const sylrinMonths =
      [{name: 'Veskien', length: 40},
      {name: 'Greywin', length: 39},
      {name: 'Gilan', length: 40},
      {name: 'Orkien', length: 39},
      {name: 'Winen', length: 39},
      {name: 'Arkien', length: 39},
      {name: 'Sybil', length: 40},
      {name: 'Figkien', length: 39},
      {name: 'Elmirn', length: 39},
      {name: 'Amedust', length: 39},
      {name: 'Tolkien', length: 40},
      {name: 'Cynen', length: 39},
      {name: 'Nathyen', length: 39},
      {name: 'Erkien', length: 39},
      {name: 'Keskien', length: 40}
    ];
    const sylrinEras = [
      {eraName: 'Before Teturic', abbreviation: 'BT', ending: 1, reversed: true},
      {eraName: 'Age of Ash', abbreviation: 'AoA', beginning: 1, ending:  309, reversed: false},
      {eraName: 'Magic Era', abbreviation: 'ME', beginning: 1, reversed: false}
    ];
    const sylrinCurrentEra = 2;
    const sylrinCurrentYear = 712;
    const sylrinLeapYearRules = [
      {leapYearCycles: 1000, leapYearOffset: 612, leapYearChange: 1, leapDayMonth: 5},
    ];

    const sylrinSettings: Calendar = {
      calendarID: sylrinCalendarID,
      calendarName: sylrinCalendarName,
      year: {
        startingDayID: sylrinStartingDayID,
        startingDoW: sylrinStartingDoW,
        eras: sylrinEras,
        currentEra: sylrinCurrentEra,
        currentYear: sylrinCurrentYear
      },
      months: sylrinMonths,
      DoW: sylrinDoW,
      leapYearRules: sylrinLeapYearRules,
      events: sylrinEventLists
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
  */
