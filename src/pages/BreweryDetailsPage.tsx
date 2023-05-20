import {Brewery} from "../models/brewery";

interface BreweryDetailsPageProps {
    brewery: Brewery | null;
}
export function BreweryDetailsPage({brewery}: BreweryDetailsPageProps) {
    return (
      <>
          <p>
              Fill this in...
          </p>
      </>
    );
}