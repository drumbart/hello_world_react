import React, {useEffect, useState} from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {BreweriesTable} from "./BreweriesTable";
import {Brewery} from "./models/brewery";

function App() {
    const [breweries, setBreweries] = useState<[Brewery]>();

    const getBreweries = async (text: string) => {
        const result = await fetch(
            text.length > 0 ?
                `https://api.openbrewerydb.org/v1/breweries/search?query=${text}` :
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
            <BreweriesTable breweries={breweries}/>
        </>
    );
}

export default App;
