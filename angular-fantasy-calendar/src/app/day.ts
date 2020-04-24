import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent, MonthlyDayOfWeekEvent,
    YearlyMonthlyDayOfWeekEvent, UniqueEvent, YearlyMonthlyEvent } from './calendarEvent';

export interface Day {
    id: number;
    dayOfMonth: number;
    dayOfYear: number;
    cyclicalEvents?: CyclicalEvent[];
    uniqueEvents?: UniqueEvent[];
    weeklyEvents?: WeeklyEvent[];
    monthlyEvents?: MonthlyEvent[];
    yearlyEvents?: YearlyEvent[];
    monthDOWEvents?: MonthlyDayOfWeekEvent[];
    yearMonthDOWEvents?: YearlyMonthlyDayOfWeekEvent[];
    yearMonthlyEvents?: YearlyMonthlyEvent[];
}
