import { CalendarSettings } from './calendarSettings';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent,
    MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent,
    UniqueEvent } from './calendarEvent';

export interface TotalSettings {
    calendarID: number;
    calendarName: string;
    calendarSettings: CalendarSettings;
    uniqueEvents: UniqueEvent[];
    cyclicalEvents: CyclicalEvent[];
    weeklyEvents: WeeklyEvent[];
    monthlyEvents: MonthlyEvent[];
    yearlyEvents: YearlyEvent[];
    monthDOWEvents: MonthlyDayOfWeekEvent[];
    yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
    yearlyMonthlyEvents: YearlyMonthlyEvent[];
}
