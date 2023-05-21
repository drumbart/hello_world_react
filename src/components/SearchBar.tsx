import {StyledInput} from "../common/Styles";
import React, {useEffect, useMemo} from "react";
import debounce from 'lodash.debounce';

interface SearchBarProps {
    getBreweries: (text: string) => Promise<void>;
}

export function SearchBar(props: SearchBarProps) {
    //useMemo() calls debounce() just once,
    // while useCallback() during every re-rendering.
    const debouncedChangeHandler = useMemo(
        () => debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            props.getBreweries(event.target.value).catch();
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