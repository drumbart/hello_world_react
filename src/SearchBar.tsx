import {StyledInput} from "./Common";
import React, {useEffect, useMemo} from "react";
import debounce from 'lodash.debounce';

interface SearchBarProps {
    getBreweries: () => Promise<void>;
    searchBreweries: (text: string) => Promise<void>;
}
export function SearchBar(props: SearchBarProps) {
    const debouncedChangeHandler = useMemo(
        () => debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.value === '') {
                props.getBreweries().catch();
            } else {
                props.searchBreweries(event.target.value).catch();
            }
        }, 300),
        [props]
    );

    // Stop the invocation of the debounced function
    // after unmounting
    useEffect(() => {
        return () => {
            debouncedChangeHandler.cancel();
        }
    }, [debouncedChangeHandler]);

    return (
        <div className="App-header">
            <StyledInput
                id="SearchBar"
                type={"text"}
                placeholder={"Search breweries..."}
                onChange={debouncedChangeHandler}/>
        </div>
    );
}