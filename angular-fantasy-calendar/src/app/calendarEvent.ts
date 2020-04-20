export interface CalendarEvent {
    title: string;
    duration: number;
    offset: number;
}

export interface CyclicalEvent extends CalendarEvent {
    repeatDays: number;
}

export interface WeeklyEvent extends CalendarEvent {
    roundToNearest: boolean;
}

export interface MonthlyEvent extends CalendarEvent {
    roundToNearest: boolean;

}

export interface YearlyEvent extends CalendarEvent {
    roundToNearest: boolean;
    month?: number;
}

export const EMPTY_CYCLICAL_EVENT: CyclicalEvent = {
    title: null,
    duration: null,
    offset: null,
    repeatDays: null
};

export const EMPTY_WEEKLY_EVENT: WeeklyEvent = {
    title: null,
    duration: null,
    offset: null,
    roundToNearest: null
};
export const EMPTY_MONTHLY_EVENT: MonthlyEvent = {
    title: null,
    duration: null,
    offset: null,
    roundToNearest: null
};
export const EMPTY_YEARLY_EVENT: YearlyEvent = {
    title: null,
    duration: null,
    offset: null,
    roundToNearest: null
};
