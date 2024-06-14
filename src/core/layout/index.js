import React from "react";
import { Link } from "react-router-dom"

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
                <img src={require("../../logo.png")} alt="logo" />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Reactjs Apps with APIs</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Weather</h4>
                  <p className="pb-0 mb-0">
                    Purpose: API is used to access current weather data for any location
                  </p>
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://openweathermap.org/api">
                    https://openweathermap.org/api
                    </a>
                    <img
                      src={require("../../noun-link.png")}
                      className="ms-2"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          <div>THIS WEATHER WILL YOU WEATHER DETAILS</div>
          <div>
            <img src={require("../../footer-logo.png")} alt="logo" />
          </div>
        </div>
      </footer>
    </>
  )
}
