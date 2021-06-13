import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api';

import style from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchCountries]);
    
    // console.log(fetchedCountries);
    
    return(
        <FormControl className={style.formControl}>
        <h3>Select Country:</h3>
            <NativeSelect defaultValue="" onChange={ (e) => handleCountryChange(e.target.value)} >
                <option value="" >Worldwide</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;