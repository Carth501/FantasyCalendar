import { CalendarEvent } from './calendarEvent';

export interface Day {
    id: number;
    dayOfMonth: number;
    dayOfYear: number;
    events?: CalendarEvent[];
}
