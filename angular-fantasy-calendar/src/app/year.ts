import { Month } from './month';

export interface Year {
    id: number;
    yearNumber: number;
    months: Month[];
    DoW: string[];
}
