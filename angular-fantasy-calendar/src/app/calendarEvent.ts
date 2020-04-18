
export interface CyclicalEvent {
    eventID: number;
    title: string;
    dateID: number;
    duration: number;
    repeatDays: number;
}

export interface WeeklyEvent {
    title: string;
    duration: number;
    day: number;
}
export interface MonthlyEvent {
    title: string;
    duration: number;
    day: number;
}
export interface YearlyEvent {
    title: string;
    duration: number;
    day: number;
    month?: number;
}

export const EMPTY_CYCLICAL_EVENT: CyclicalEvent = {
    eventID: null,
    title: null,
    dateID: null,
    duration: null,
    repeatDays: null
};

export const EMPTY_WEEKLY_EVENT: WeeklyEvent = {
    title: null,
    duration: null,
    day: null
};
export const EMPTY_MONTHLY_EVENT: MonthlyEvent = {
    title: null,
    duration: null,
    day: null
};
export const EMPTY_YEARLY_EVENT: YearlyEvent = {
    title: null,
    duration: null,
    day: null
};
