import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area} = props.country
    return (
        <div className='country'>
             <h2>Country Name: {props.name}</h2>
            <h4>Population: {props.population}</h4>
            <h4>Region: {props.country.region}</h4>
            <h5>Area:{area}</h5>
        </div>
    );
};

export default Country;