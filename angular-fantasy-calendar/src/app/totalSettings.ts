import { CalendarSettings } from './calendarSettings';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent } from './calendarEvent';

export interface TotalSettings {
    calendarSettings: CalendarSettings;
    cyclicalEvents: CyclicalEvent[];
    weeklyEvents: WeeklyEvent[];
    monthlyEvents: MonthlyEvent[];
    yearlyEvents: YearlyEvent[];
}
