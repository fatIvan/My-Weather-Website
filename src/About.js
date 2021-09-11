import React from 'react';
import NavBar from './components/Navbar';

const About = () => {
    return ( 
        <React.Fragment>
        <NavBar />
        <div className="about">
            <div className="title">
                About this Website
            </div>
            <span className="web-info">
                This website is made by Ivan Zhang for practicing using JavaScript, especially React for building website and fetching data from API. In case of this website, all the weather info
                are retrieved from a free weather api online. Thank you for visiting this website and hope you can give me some feedback that I can improve on. Thank you so much!
            </span>
        </div>
        </React.Fragment>
     );
  }

  export default About;