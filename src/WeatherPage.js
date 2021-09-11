import React from 'react';
import NavBar from './components/Navbar';
import { Redirect } from 'react-router';

const WeatherPage = (props) => {
    if(props.location.state){
        const { res } = props.location.state;
        console.log(res);
        return (
            <div className="Weatherpage">
                <NavBar />
                <div className="weather-container">
                    <div className="outer-box">
                        <div className="inner-box">
                                <span className="city-name">
                                    {res.name}, {res.sys.country}
                                </span>
                                <div>
                                    <span>Current Temperature:</span>
                                    <span className={Math.round(res.main.temp - 273.15) < 20 ? "cold" : "warm"}> {Math.round(res.main.temp - 273.15)}°C</span>
                                </div>
                                <div>
                                    <span>Feels like: </span>
                                    <span className={Math.round(res.main.feels_like - 273.15) < 20 ? "cold" : "warm"}>{Math.round(res.main.feels_like - 273.15)}°C</span>
                                </div>
                                <div>
                                    <span>High Temperature: </span>
                                    <span className={Math.round(res.main.temp_max - 273.15) < 20 ? "cold" : "warm"}>{Math.round(res.main.temp_max - 273.15)}°C</span>
                                </div>
                                <div>
                                    <span>Low Temperature: </span>
                                    <span className={Math.round(res.main.temp_min - 273.15) < 20 ? "cold" : "warm"}>{Math.round(res.main.temp_min - 273.15)}°C</span>
                                </div>

                                <div >
                                    <span>Humidity: </span>
                                    <span className={res.main.humidity > 50 ? "humid" : "not-humid"}>{res.main.humidity}</span>
                                </div>
                                
                                <div>
                                <span> Current Weather: </span>
                                    <span className="cur-weather">{res.weather[0].description}</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    return <Redirect to="/Error" />;
}

  export default WeatherPage;