import {StyledDataCell, StyledHeader, StyledTable} from "./Styles";
import {Brewery} from "./models/brewery";

interface BreweriesTableProps {
    breweries: [Brewery]
}

export function BreweriesTable({breweries}: BreweriesTableProps) {
    return (
        <StyledTable>
            <tbody>
            <tr>
                <StyledHeader>Name</StyledHeader>
                <StyledHeader>Type</StyledHeader>
                <StyledHeader>City</StyledHeader>
                <StyledHeader>Country</StyledHeader>
            </tr>
            {
                breweries.map(brewery =>
                    <tr key={brewery.id}>
                        <StyledDataCell>{brewery.name}</StyledDataCell>
                        <StyledDataCell>{brewery.brewery_type}</StyledDataCell>
                        <StyledDataCell>{brewery.city}</StyledDataCell>
                        <StyledDataCell>{brewery.country}</StyledDataCell>
                    </tr>)
            }
            </tbody>
        </StyledTable>
    );
}