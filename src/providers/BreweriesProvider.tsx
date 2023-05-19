import {createContext} from "react";

export interface BreweriesApi {
    getBreweries: () => Promise<void>
    searchBreweries: (text: string) => Promise<void>
}

// Not used now.
export const BreweriesProvider= createContext<BreweriesApi>({
    getBreweries: () => Promise.resolve(),
    searchBreweries: () => Promise.resolve()
});