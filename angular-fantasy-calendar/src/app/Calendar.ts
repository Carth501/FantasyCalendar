import { SettingsMonth } from './settingsMonth';
import { LeapYear } from './leapYear';
import { EventLists } from './calendarEvent';
import { YearMath } from './yearMath';

export interface Calendar {
    // These four are hidden from user and inaccessible.
    calendarID: number;
    calendarName: string;
    year: YearMath;
    months: SettingsMonth[];
    DoW: string[];
    leapYearRules: LeapYear[];
    events: EventLists;
}
