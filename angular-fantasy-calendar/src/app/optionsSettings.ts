import { LeapYear } from './leapYear';

export interface OptionsSettings {
    daysPerMonths: number[];
    DoWNames: string[];
    monthNames: string[];
    currentYear: number;
    leapYears: LeapYear[];
}

