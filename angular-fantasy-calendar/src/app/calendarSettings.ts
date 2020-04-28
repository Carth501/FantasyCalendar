import { LeapYear } from './leapYear';
import { Era } from './era';

export interface CalendarSettings {
    startingDayID: number;
    daysPerMonths: number[];
    startingDoW: number;
    DoW_names: string[];
    monthNames: string[];
    eras: Era[];
    currentEra: number;
    currentYear: number;
    leapYears: LeapYear[];
}

