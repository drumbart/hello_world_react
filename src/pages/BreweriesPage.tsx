import {BreweriesTable} from "../components/BreweriesTable";
import {Brewery} from "../models/Brewery";
import {NoResults} from "../components/NoResults";
import {SearchBar} from "../components/SearchBar";
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
                breweries?.length ? <BreweriesTable breweries={breweries}/> : <NoResults/>
            }
        </>
    );
}