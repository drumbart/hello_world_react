import {BreweryDetails} from "../models/BreweryDetails";
import {StyledDataCell, StyledTable} from "../common/Styles";

interface BreweryDetailsTableProps {
    breweryDetails: BreweryDetails;
}

function capitalizeFirstLetter(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function BreweryDetailsTable({breweryDetails}: BreweryDetailsTableProps) {
    return <StyledTable>
        <tbody>
        {
            Object.keys(breweryDetails).map(key => {
                const re = /_/gi;
                const formattedKey = key.replace(re, ' ');
                const value = Reflect.get(breweryDetails, key) as string;

                return key === 'id' ?
                    null :
                    <tr key={key}>
                        <StyledDataCell>{capitalizeFirstLetter(formattedKey)}</StyledDataCell>
                        <StyledDataCell>{value}</StyledDataCell>
                    </tr>
            })
        }
        </tbody>
    </StyledTable>;
}