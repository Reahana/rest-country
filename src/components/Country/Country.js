import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area,name,population,region,flags } = props.country
    return (
        <div className='country'>
             <h2>Country Name: {name.common}</h2>
             <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
            <h5>Area:{area}</h5>
        </div>
    );
};

export default Country;