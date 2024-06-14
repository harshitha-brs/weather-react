// Author:    Build Rise Shine with Nyros (BRS)
// Created:   11.05.2022
// Library / Component: Home Page
// Description: Main page  for the app
// (c) Copyright by BRS Studio | Build Rise Shine.

import { useState } from "react";
import { HttpGet } from "../core/store/httpHelper";

export const Home = () => {
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [noCityFound, setNoCityFound] = useState(null);

  const getWeatherDetails = async(event) => {
    event.preventDefault();
    let searchValue = event.target.search.value;
    try {
      if(searchValue) {
        let queryParams = {
          q: searchValue,
        }
        let weatherDetails = await HttpGet(queryParams);
        setNoCityFound(null);
        setWeatherDetails(weatherDetails);
      }
    } catch (err) {
      setWeatherDetails(null);
      setNoCityFound(err?.response?.data?.message);
    }
  }

  const GetDateData = () => {
    let time = new Date();
    let months_year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days_week[time.getDay()];
    let pdate = time.getDate();
    let month = months_year[time.getMonth()];
    let year = time.getFullYear();
    return `${day} ${pdate} ${month} ${year}`;
  }

  return (
    <>
      <div className="row m-0 justify-content-lg-center">
        <div className="col col-4 mt-4">
          <div className="input-group mb-3">
            <form onSubmit={getWeatherDetails}>
              <input autoComplete={'false'} name='search' type="text" className="form-control shadow-none" placeholder="Search for a City..." aria-label="Search for a City..." aria-describedby="img-search" autoFocus />
            </form>
          </div>
        </div>
      </div>
      <div className="row m-0 justify-content-lg-center">
        <div className="col col-6 mt-4 text-center">
          {weatherDetails &&
            <>
              <h1 className='f-bold'>{weatherDetails?.name},{weatherDetails?.sys?.country}</h1>
              <h3>{<GetDateData/>}</h3>
              <h1 className='f-bold'>{Math.round(weatherDetails?.main?.temp)} <span>&#x2103;</span></h1>
              <h1 className='f-bold'>{weatherDetails?.weather[0]?.main}</h1>
            </>
          }
          {noCityFound && <h2 className='text-danger'>City Not found</h2>}
        </div>
      </div>
    </>
  )
}
