export interface Era {
    eraName: string;
    abbreviation: string;
    beginning?: number;
    ending?: number;
    reversed: boolean;
}

export const EMPTY_ERA: Era = {
    eraName: null,
    abbreviation: null,
    beginning: null,
    ending: null,
    reversed: null
};
