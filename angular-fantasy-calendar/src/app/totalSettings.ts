import { CalendarSettings } from './calendarSettings';
import { CalendarEvent } from './calendarEvent';

export interface TotalSettings {
    calendarSettings: CalendarSettings;
    eventArray: CalendarEvent[];
}
