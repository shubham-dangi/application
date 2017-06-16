import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Weather from './Weather.js';


class App extends Component 
{
  constructor()
  {
    super();
    this.state={"name":"","weather":[],"tb":false};
    this.change=this.change.bind(this);
    this.fetchValue=this.fetchValue.bind(this);
  }

  change(e)
  {
    this.setState({name: e.target.value});
  }
  fetchValue(cityname) 
  {
    console.log(cityname);
    this.setState({tb: true});
    $.ajax({
    
    url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=e3ecc901824c48cabe7f3a3a01e6defb",
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(message)
    {

    console.log(message.list);
    this.setState({weather:message.list});
    }.bind(this),
    error: function(err)
    {
    console.log("Main-Error Fetching ");
    }
    });
  }
  render() {
    return (
      <div className="App">
      <h1>Weather Forecast</h1>
        <input type="text" value={this.state.name} onChange={this.change}/>
        <button type="submit" onClick={() => {this.fetchValue(this.state.name)}}>Search</button>
        <Weather weather={this.state.weather} tb={this.state.tb}/>
      </div>
    );
  }
}

export default App;
