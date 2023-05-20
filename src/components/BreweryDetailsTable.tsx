import {BreweryDetails} from "../models/BreweryDetails";
import {StyledDataCell, StyledTable} from "../common/Styles";

interface BreweryDetailsTableProps {
    breweryDetails: BreweryDetails;
}

export function BreweryDetailsTable({breweryDetails}: BreweryDetailsTableProps) {
    return (
        <StyledTable>
            <tbody>
            <tr key='1'>
                <StyledDataCell>Name:</StyledDataCell>
                <StyledDataCell>{breweryDetails.name}</StyledDataCell>
            </tr>
            <tr key='2'>
                <StyledDataCell>Type:</StyledDataCell>
                <StyledDataCell>{breweryDetails.brewery_type}</StyledDataCell>
            </tr>
            <tr key='3'>
                <StyledDataCell>City:</StyledDataCell>
                <StyledDataCell>{breweryDetails.city}</StyledDataCell>
            </tr>
            <tr key='4'>
                <StyledDataCell>Address 1:</StyledDataCell>
                <StyledDataCell>{breweryDetails.address_1}</StyledDataCell>
            </tr>
            <tr key='5'>
                <StyledDataCell>Address 2:</StyledDataCell>
                <StyledDataCell>{breweryDetails.address_2}</StyledDataCell>
            </tr>
            <tr key='6'>
                <StyledDataCell>Address 3:</StyledDataCell>
                <StyledDataCell>{breweryDetails.address_3}</StyledDataCell>
            </tr>
            <tr key='7'>
                <StyledDataCell>State Province:</StyledDataCell>
                <StyledDataCell>{breweryDetails.state_province}</StyledDataCell>
            </tr>
            <tr key='8'>
                <StyledDataCell>Postal Code:</StyledDataCell>
                <StyledDataCell>{breweryDetails.postal_code}</StyledDataCell>
            </tr>
            <tr key='9'>
                <StyledDataCell>Country:</StyledDataCell>
                <StyledDataCell>{breweryDetails.country}</StyledDataCell>
            </tr>
            <tr key='10'>
                <StyledDataCell>Longitude:</StyledDataCell>
                <StyledDataCell>{breweryDetails.longitude}</StyledDataCell>
            </tr>
            <tr key='11'>
                <StyledDataCell>Latitude:</StyledDataCell>
                <StyledDataCell>{breweryDetails.latitude}</StyledDataCell>
            </tr>
            <tr key='12'>
                <StyledDataCell>Phone:</StyledDataCell>
                <StyledDataCell>{breweryDetails.phone}</StyledDataCell>
            </tr>
            <tr key='13'>
                <StyledDataCell>Website:</StyledDataCell>
                <StyledDataCell>{breweryDetails.website_url}</StyledDataCell>
            </tr>
            <tr key='14'>
                <StyledDataCell>State:</StyledDataCell>
                <StyledDataCell>{breweryDetails.state}</StyledDataCell>
            </tr>
            <tr key='15'>
                <StyledDataCell>Street:</StyledDataCell>
                <StyledDataCell>{breweryDetails.street}</StyledDataCell>
            </tr>
            </tbody>
        </StyledTable>
    );
}