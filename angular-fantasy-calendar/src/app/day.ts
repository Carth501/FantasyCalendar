import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent, MonthlyDayOfWeekEvent, YearlyMonthlyDayOfWeekEvent } from './calendarEvent';

export interface Day {
    id: number;
    dayOfMonth: number;
    dayOfYear: number;
    cyclicalEvents?: CyclicalEvent[];
    weeklyEvents?: WeeklyEvent[];
    monthlyEvents?: MonthlyEvent[];
    yearlyEvents?: YearlyEvent[];
    monthDOWEvents?: MonthlyDayOfWeekEvent[];
    yearMonthDOWEvents?: YearlyMonthlyDayOfWeekEvent[];
}
