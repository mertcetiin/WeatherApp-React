import React from 'react'
import { useWeather } from '../context/WeatherContext'
import cties from '../json/cities.json'

function Section() {

    const { setCity } = useWeather()
    const handleChange = ((citySelect) => {
        setCity(citySelect.target.value)
    })
    return (
        <div className='select'>
            <h1 className='HeadText'>Choose Province</h1>

            <div className='custom-select' >
                <select onChange={handleChange}>
                    {
                        cties.map((city) =>
                            < option key={city.id} > {city.name}</option>
                        )
                    }
                </select>

            </div>

        </div >
    )
}

export default Section