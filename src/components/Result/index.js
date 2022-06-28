import React from 'react'

function Result({weather}) {
  return (
    <>
    {typeof weather.main != "undefined" && (
      <div className='result'>
        <div className="city-name">{weather.name}, {weather.sys.country}</div>
        <div className="detail">
          <div className="centigrade">{Math.round(weather.main.temp)}°C</div>
          <div className="statu">{weather.weather[0].description}</div>
        </div>
      </div>
    )}
    </>
  );
}

export default Result;