export interface CalendarEvent { // basic calendar event
    title: string;
    duration: number;
    offset: number;
}

export interface EventLists {
    uniqueEvents: UniqueEvent[];
    cyclicalEvents: CyclicalEvent[];
    weeklyEvents: WeeklyEvent[];
    monthlyEvents: MonthlyEvent[];
    yearlyEvents: YearlyEvent[];
    monthDOWEvents: MonthlyDayOfWeekEvent[];
    yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[];
    yearlyMonthlyEvents: YearlyMonthlyEvent[];
}

export interface UniqueEvent extends CalendarEvent {
    // An event that only happens once such as a volcanic eruption,
    // a hurricane, or a notable death.
    // offset is the dayID
}

export interface CyclicalEvent extends CalendarEvent {
    // happens independent of the calendar settings. Based strictly of dayID
    repeatDays: number;
}

export interface WeeklyEvent extends CalendarEvent {
    // On a certain day of the week, say, tuesday
}

export interface MonthlyEvent extends CalendarEvent {
    // On a certain day of the month, like the 14th.
}

export interface YearlyEvent extends CalendarEvent {
    // On a certain day of the year, like the 231st.
}

export interface MonthlyDayOfWeekEvent extends MonthlyEvent {
    // On a certain day of the week, after a certain number of those days
    // like, every third wednesday
    // Offset is used to choose which day of the week
    // Week offset is used to choose how many weeks to skip
    weekOffset: number;
}

export interface YearlyMonthlyDayOfWeekEvent extends MonthlyDayOfWeekEvent {
    // On a certain day of the week, in a certain month, every year.
    // Example: the second saturday in March
    // Offset is used to choose which day of the week
    // Week offset is the month this applies to
    // Month offset is the month this applies to
    monthOffset: number;
}

export interface YearlyMonthlyEvent extends YearlyEvent {
    // A number of days into a month, regardless of the day
    // of the week
    // month offset is the month this applies to
    // offset is the day of the month
    monthOffset: number;
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
    offset: null
};
export const EMPTY_MONTHLY_EVENT: MonthlyEvent = {
    title: null,
    duration: null,
    offset: null
};
export const EMPTY_YEARLY_EVENT: YearlyEvent = {
    title: null,
    duration: null,
    offset: null
};
