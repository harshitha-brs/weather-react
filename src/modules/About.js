// Author:    Build Rise Shine with Nyros (BRS)
// Created:   11.05.2022
// Library / Component: About page
// Description: Page displays about the website working
// (c) Copyright by BRS Studio | Build Rise Shine.

export const About = () => {
  return (
    <div className="container">
      <div className="col-md-12 mt-5 text-center">
        <p>API: Weather API</p>
        <p>API link: <a href='https://openweathermap.org/api'>https://openweathermap.org/api</a></p>
        <p>Purpose : API is used to access current weather data for any location</p>
      </div>
    </div>
  )
}
