import React, { useState } from 'react'

function Search({setWeather}) {
  const api = {
    key:"1f6913cf10316b840232d5a42b265835",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [searchCity , setSearchCity] = useState("");

  const inputSearch = (e) => {
    if(e.key === "Enter"){
      fetch(`${api.base}?q=${searchCity}&units=metric&lang=tr&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        setSearchCity("");
        setWeather(data);
      })
    }
  }

  return (
    <div className='search'>
        <input 
        type="text" 
        className='search-input' 
        placeholder='City Search'
        onChange={(e) => setSearchCity(e.target.value)}
        value = {searchCity}
        onKeyPress ={inputSearch}
        />
        
    </div>
  )
}

export default Search;