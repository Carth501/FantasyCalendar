import { Era } from './era';

export interface YearMath {
    startingDayID: number;
    startingDoW: number;
    eras: Era[];
    currentEra: number;
    currentYear: number;
}
