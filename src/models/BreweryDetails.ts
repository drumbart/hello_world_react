import {Brewery} from "./Brewery";

export interface BreweryDetails extends Brewery {
    address_1: string;
    address_2: string;
    address_3: string;
    state_province: string;
    postal_code: string;
    longitude: string
    latitude: string;
    phone: string;
    website_url: string;
    state: string;
    street: string;
}