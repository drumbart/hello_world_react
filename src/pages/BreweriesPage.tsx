import {BreweriesTable} from "../components/BreweriesTable";
import {Brewery} from "../models/Brewery";
import {NoResults} from "../components/NoResults";
import {SearchBar} from "../components/SearchBar";
import React, {useEffect, useState} from "react";

export function BreweriesPage() {
    const [
        breweries,
        setBreweries
    ] = useState<[Brewery] | null>(null);

    const getBreweries = async (text: string) => {
        const result = await fetch(
            text.length > 0 ?
                `https://api.openbrewerydb.org/v1/breweries/search?query=${encodeURIComponent(text)}` :
                'https://api.openbrewerydb.org/v1/breweries');
        const jsonResult = await result.json();
        setBreweries(jsonResult);
    }

    useEffect(() => {
        getBreweries('').catch();
    }, []);
    return (
        <>
            <SearchBar getBreweries={getBreweries}/>
            {
                breweries?.length ? <BreweriesTable breweries={breweries}/> : <NoResults/>
            }
        </>
    );
}