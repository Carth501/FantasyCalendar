import { SettingsMonth } from './settingsMonth';
import { Era } from './era';
import { LeapYear } from './leapYear';
import { UniqueEvent, CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
    MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent 
    } from './calendarEvent';

export interface Calendar {
    // These four are hidden from user and inaccessible.
    calendarID: number;
    calendarName: string;
    year: {
        startingDayID: number;
        startingDoW: number;
        eras: Era[];
        currentEra: number;
        currentYear: number;
    };
    months: SettingsMonth[];
    DoW: string[];
    leapYearRules: LeapYear[];

    events: {
        uniqueEvents: UniqueEvent[];
        cyclicalEvents: CyclicalEvent[];
        weeklyEvents: WeeklyEvent[];
        monthlyEvents: MonthlyEvent[];
        yearlyEvents: YearlyEvent[];
        monthDOWEvents: MonthlyDayOfWeekEvent[];
        yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
        yearlyMonthlyEvents: YearlyMonthlyEvent[];
    }
}