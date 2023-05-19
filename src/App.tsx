import React, {useEffect, useState} from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {BreweriesTable} from "./BreweriesTable";
import {Brewery} from "./models/brewery";

function App() {
    const [breweries, setBreweries] = useState<[Brewery]>();

    const getBreweries = async () => {
        const result = await fetch('https://api.openbrewerydb.org/v1/breweries');
        const jsonResult = await result.json();
        setBreweries(jsonResult);
    };

    const searchBreweries = async (text: string) => {
        const result = await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${text}`);
        const jsonResult = await result.json();
        setBreweries(jsonResult);
    }


    useEffect(() => {
        getBreweries().catch();
    }, []);

    return (
        <div>
            <SearchBar getBreweries={getBreweries} searchBreweries={searchBreweries}/>
            <BreweriesTable breweries={breweries}/>
        </div>
    );
}

export default App;
