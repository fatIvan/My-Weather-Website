import React, { Component } from 'react';
import NavBar from './components/Navbar';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            API_KEY : "2de45f28e01ad49679271b9decc91e79",
        }
    }

    getWeather = async(input) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${this.state.API_KEY}`)
        .then(res => {
            if(res.ok) return res.json();
        })
        .then(res => {
            console.log(111111);
            this.setState( { location: res, name: res.name} );
        }).catch((error) => {
            this.setState({error: true});
        });
    }


    handleKeyPress = e => {
            if(e.charCode === 13){
                this.getWeather(document.getElementById("searchinput").value);
            }
    }

    
    render() { 
        if(this.state.error){
            return <Redirect push to="/Error" />;
        }
        if(this.state.location){
            return <Redirect to={{
                pathname: `/${this.state.location.name}`,
                state: {res: this.state.location, count: 1}
            }}/>;
        }
        return ( 
            <div className="Home">
                <NavBar />
                    <div className="search-area">
                        <i className="fas fa-meteor fa-3x"></i>
                        <div className="search">
                            <input id="searchinput" type="text" className="search-bar" onKeyPress={this.handleKeyPress} placeholder="Hit enter to search"/>
                            <button className="tablet" onClick={this.handleKeyPress}>Search</button>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Home;





//conditionally render search-bar
//errorpage on home component
//icon can reset the homepage 