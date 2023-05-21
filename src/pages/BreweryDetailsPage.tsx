import {useParams} from "react-router-dom";
import {StyledLink, StyledParagraphWhite} from "../common/Styles";
import {useCallback, useEffect, useState} from "react";
import {BreweryDetails} from "../models/BreweryDetails";
import {BreweryDetailsTable} from "../components/BreweryDetailsTable";

export function BreweryDetailsPage() {
    const {id} = useParams();
    const [
        breweryDetails,
        setBreweryDetails
    ] = useState<BreweryDetails | null>(null)

    const getBreweryDetails = useCallback(
        async () => {
            const result = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
            const jsonResult = await result.json();
            setBreweryDetails(jsonResult);
        }, [id]
    );

    useEffect(() => {
        getBreweryDetails().catch();
    }, [getBreweryDetails]);

    return (
        <>
            <StyledLink to='/'>Back to Breweries</StyledLink>
            {
                breweryDetails !== null ?
                    <BreweryDetailsTable breweryDetails={breweryDetails}/> :
                    <StyledParagraphWhite>Loading data...</StyledParagraphWhite>
            }
        </>
    );
}