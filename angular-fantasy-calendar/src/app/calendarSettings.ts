import { LeapYear } from './leapYear';

export interface CalendarSettings {
    startingDayID: number;
    daysPerMonths: number[];
    startingDoW: number;
    DoW_names: string[];
    monthNames: string[];
    currentYear: number;
    leapYears: LeapYear[];
}

