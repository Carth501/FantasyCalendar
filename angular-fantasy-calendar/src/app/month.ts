import { Week } from './week';

export interface Month {
    id: number;
    name: string;
    weeks: Week[];
}
