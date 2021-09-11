import React from 'react';
import NavBar from './components/Navbar';
const ErrorPage = () =>{
    return(
      <div className="Home">
        <NavBar/>
        <div className="not-exist">
          <span className="error">Sorry! We have no weather data of the place you are looking for.</span>
        </div>
    </div>
    );
  }
  export default ErrorPage;