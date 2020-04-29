import { LeapYear } from './leapYear';
import { Era } from './era';
import { SettingsMonth } from './settingsMonth';

export interface CalendarSettings {
    startingDayID: number;
    startingDoW: number;
    DoW_names: string[];
    settingsMonths: SettingsMonth[];
    eras: Era[];
    currentEra: number;
    currentYear: number;
    leapYears: LeapYear[];
}

