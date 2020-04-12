
export interface CalendarEvent {
    eventID: number;
    title: string;
    dateID: number;
    duration: number;
    repeatDays: number;
    repeatAnnual: boolean;
}

export const EMPTY_EVENT: CalendarEvent = {
    eventID: null,
    title: null,
    dateID: null,
    duration: null,
    repeatDays: null,
    repeatAnnual: null
};
