import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <div className="Nav">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>
            <div className="lefticon">
            <i className="fas fa-meteor sm-comet"></i>
            <span className="name">Weather</span>
            </div>
            </Link>
            <span className='item'>
                <Link to="/About" style={{ textDecoration: 'none', color: 'inherit'}}>About</Link>
            </span>
        </div>

    );
}
 
export default NavBar;