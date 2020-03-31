import { CalendarEvent } from './calendarEvent';

export const MOCK_EVENTS: CalendarEvent[] = [
    {eventID: 0, title: '', dateID: 6, duration: 1, repeatDays: 0, repeatAnnual: false},
    {eventID: 1, title: 'Test', dateID: 6, duration: 1, repeatDays: 16, repeatAnnual: false},
    {eventID: 2, title: 'Full Moon', dateID: 2, duration: 3, repeatDays: 34.5, repeatAnnual: false},
    {eventID: 3, title: 'Total Luna', dateID: 42, duration: 4.2, repeatDays: 44.4, repeatAnnual: false}
];
