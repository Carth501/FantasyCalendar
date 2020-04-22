import { CalendarSettings } from './calendarSettings';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent, MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent } from './calendarEvent';

export interface TotalSettings {
    calendarSettings: CalendarSettings;
    cyclicalEvents: CyclicalEvent[];
    weeklyEvents: WeeklyEvent[];
    monthlyEvents: MonthlyEvent[];
    yearlyEvents: YearlyEvent[];
    monthDOWEvents: MonthlyDayOfWeekEvent[];
    yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
}
