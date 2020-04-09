export interface LeapYear {
    leapYearCycles: number;
    leapYearOffset: number;
    leapYearChange: number;
    leapDayMonth: number;
}

export const EMPTY_LEAP_YEAR: LeapYear = {
    leapYearCycles: null,
    leapYearOffset: null,
    leapYearChange: null,
    leapDayMonth: null
};
