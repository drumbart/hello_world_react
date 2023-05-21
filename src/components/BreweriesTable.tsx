import {StyledDataCell, StyledHeader, StyledLink, StyledTable} from "../common/Styles";
import {Brewery} from "../models/Brewery";
import {Link} from "react-router-dom";

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
                        <StyledDataCell>
                            <StyledLink to={`brewery_details/${brewery.id}`}>
                                {brewery.name}
                            </StyledLink>
                        </StyledDataCell>
                        <StyledDataCell>{brewery.brewery_type}</StyledDataCell>
                        <StyledDataCell>{brewery.city}</StyledDataCell>
                        <StyledDataCell>{brewery.country}</StyledDataCell>
                    </tr>
                )
            }
            </tbody>
        </StyledTable>
    );
}