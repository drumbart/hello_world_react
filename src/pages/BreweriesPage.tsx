import {BreweriesTable} from "../BreweriesTable";
import {Brewery} from "../models/brewery";
import {NoResults} from "../NoResults";
import {SearchBar} from "../SearchBar";
import React from "react";

interface BreweriesPageProps {
    breweries?: [Brewery] | null
    getBreweries: (text: string) => Promise<void>
}
export function BreweriesPage({breweries, getBreweries}: BreweriesPageProps) {
    return (
        <>
            <SearchBar getBreweries={getBreweries}/>
            {
                breweries && breweries.length > 0 ? <BreweriesTable breweries={breweries}/> : <NoResults/>
            }
        </>
    );
}