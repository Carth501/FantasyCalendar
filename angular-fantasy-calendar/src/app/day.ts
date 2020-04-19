import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent } from './calendarEvent';

export interface Day {
    id: number;
    dayOfMonth: number;
    dayOfYear: number;
    cyclicalEvents?: CyclicalEvent[];
    weeklyEvents?: WeeklyEvent[];
    monthlyEvents?: MonthlyEvent[];
    yearlyEvents?: YearlyEvent[];
}
