import React, {useEffect, useState} from 'react';
import './App.css';
import {Brewery} from "./models/Brewery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BreweriesPage} from "./pages/BreweriesPage";
import {BreweryDetailsPage} from "./pages/BreweryDetailsPage";

function App() {
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
            <Routes>
                <Route path='/' element={<BreweriesPage breweries={breweries} getBreweries={getBreweries}/>}/>
                <Route path='brewery_details/:id' element={<BreweryDetailsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
